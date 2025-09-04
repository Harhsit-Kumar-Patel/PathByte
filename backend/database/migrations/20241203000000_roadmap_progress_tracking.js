/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Roadmap progress table for tracking overall progress per role/year
  await knex.schema.createTable('roadmap_progress', (table) => {
    table.string('id', 36).primary()
    table.string('user_id', 36).notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('role_id', 100).notNullable() // e.g., 'frontend', 'backend', etc.
    table.string('year_id', 20).notNullable() // e.g., '0-1', '1-3', etc.
    table.integer('completion_percentage').defaultTo(0)
    table.timestamp('last_updated').defaultTo(knex.fn.now())
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique(['user_id', 'role_id', 'year_id'])
  })

  // Roadmap item progress table for tracking individual items (skills, projects, resources)
  await knex.schema.createTable('roadmap_item_progress', (table) => {
    table.string('id', 36).primary()
    table.string('roadmap_progress_id', 36).notNullable().references('id').inTable('roadmap_progress').onDelete('CASCADE')
    table.string('item_type', 20).notNullable()
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
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  // Drop tables
  await knex.schema.dropTable('roadmap_item_progress')
  await knex.schema.dropTable('roadmap_progress')
}
