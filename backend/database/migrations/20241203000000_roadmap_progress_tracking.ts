import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // Roadmap progress table for tracking overall progress per role/year
  await knex.schema.createTable('roadmap_progress', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('role_id', 100).notNullable() // e.g., 'frontend', 'backend', etc.
    table.string('year_id', 20).notNullable() // e.g., '0-1', '1-3', etc.
    table.integer('completion_percentage').defaultTo(0).checkBetween([0, 100])
    table.timestamp('last_updated').defaultTo(knex.fn.now())
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique(['user_id', 'role_id', 'year_id'])
  })

  // Roadmap item progress table for tracking individual items (skills, projects, resources)
  await knex.schema.createTable('roadmap_item_progress', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('roadmap_progress_id').notNullable().references('id').inTable('roadmap_progress').onDelete('CASCADE')
    table.string('item_type', 20).notNullable().checkIn(['skills', 'projects', 'freeResources', 'paidResources'])
    table.integer('item_index').notNullable()
    table.boolean('completed').defaultTo(false)
    table.timestamp('completed_at')
    table.text('notes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.unique(['roadmap_progress_id', 'item_type', 'item_index'])
  })

  // Create indexes for better performance
  await knex.schema.raw(`
    CREATE INDEX idx_roadmap_progress_user_role ON roadmap_progress(user_id, role_id, year_id);
    CREATE INDEX idx_roadmap_item_progress_roadmap ON roadmap_item_progress(roadmap_progress_id);
    CREATE INDEX idx_roadmap_item_progress_type ON roadmap_item_progress(item_type);
    CREATE INDEX idx_roadmap_item_progress_completed ON roadmap_item_progress(completed);
  `)

  // Add trigger to update roadmap progress when items change
  await knex.schema.raw(`
    CREATE OR REPLACE FUNCTION update_roadmap_progress()
    RETURNS TRIGGER AS $$
    DECLARE
        total_items INTEGER;
        completed_items INTEGER;
        new_percentage INTEGER;
        roadmap_id UUID;
    BEGIN
        -- Get the roadmap_progress_id
        IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
            roadmap_id := NEW.roadmap_progress_id;
        ELSE
            roadmap_id := OLD.roadmap_progress_id;
        END IF;
        
        -- Count total and completed items for this roadmap
        SELECT 
            COUNT(*),
            COUNT(*) FILTER (WHERE completed = true)
        INTO total_items, completed_items
        FROM roadmap_item_progress
        WHERE roadmap_progress_id = roadmap_id;
        
        -- Calculate new percentage
        new_percentage := CASE 
            WHEN total_items = 0 THEN 0
            ELSE (completed_items * 100) / total_items
        END;
        
        -- Update the roadmap progress
        UPDATE roadmap_progress
        SET 
            completion_percentage = new_percentage,
            last_updated = CURRENT_TIMESTAMP
        WHERE id = roadmap_id;
        
        RETURN COALESCE(NEW, OLD);
    END;
    $$ LANGUAGE plpgsql;
  `)

  // Create triggers
  await knex.schema.raw(`
    CREATE TRIGGER trigger_update_roadmap_progress_insert
        AFTER INSERT ON roadmap_item_progress
        FOR EACH ROW
        EXECUTE FUNCTION update_roadmap_progress();

    CREATE TRIGGER trigger_update_roadmap_progress_update
        AFTER UPDATE ON roadmap_item_progress
        FOR EACH ROW
        EXECUTE FUNCTION update_roadmap_progress();

    CREATE TRIGGER trigger_update_roadmap_progress_delete
        AFTER DELETE ON roadmap_item_progress
        FOR EACH ROW
        EXECUTE FUNCTION update_roadmap_progress();
  `)
}

export async function down(knex: Knex): Promise<void> {
  // Drop triggers first
  await knex.schema.raw(`
    DROP TRIGGER IF EXISTS trigger_update_roadmap_progress_insert ON roadmap_item_progress;
    DROP TRIGGER IF EXISTS trigger_update_roadmap_progress_update ON roadmap_item_progress;
    DROP TRIGGER IF EXISTS trigger_update_roadmap_progress_delete ON roadmap_item_progress;
  `)

  // Drop function
  await knex.schema.raw('DROP FUNCTION IF EXISTS update_roadmap_progress();')

  // Drop tables
  await knex.schema.dropTable('roadmap_item_progress')
  await knex.schema.dropTable('roadmap_progress')
}
