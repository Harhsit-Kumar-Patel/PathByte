/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Create users table
  await knex.schema.createTable('users', (table) => {
    table.string('id', 36).primary()
    table.string('email', 255).unique().notNullable()
    table.string('password_hash', 255).notNullable()
    table.string('first_name', 100).notNullable()
    table.string('last_name', 100).notNullable()
    table.text('avatar_url')
    table.string('location_city', 100).notNullable()
    table.string('location_state', 100).notNullable()
    table.string('location_country', 100).notNullable()
    table.string('experience_level', 20).notNullable()
    table.string('target_role', 100).notNullable()
    table.string('subscription_tier', 20).defaultTo('free')
    table.boolean('is_active').defaultTo(true)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

  // Create skills table
  await knex.schema.createTable('skills', (table) => {
    table.string('id', 36).primary()
    table.string('name', 100).unique().notNullable()
    table.string('category', 50).notNullable()
    table.text('description')
    table.decimal('average_salary', 10, 2)
    table.integer('learning_time_hours')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  // Create user_skills table
  await knex.schema.createTable('user_skills', (table) => {
    table.string('id', 36).primary()
    table.string('user_id', 36).notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('skill_id', 36).notNullable().references('id').inTable('skills').onDelete('CASCADE')
    table.integer('proficiency').notNullable()
    table.boolean('is_target_skill').defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique(['user_id', 'skill_id'])
  })

  // Create learning_roadmaps table
  await knex.schema.createTable('learning_roadmaps', (table) => {
    table.string('id', 36).primary()
    table.string('user_id', 36).notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('title', 200).notNullable()
    table.text('description')
    table.string('target_role', 100).notNullable()
    table.integer('estimated_duration_weeks').notNullable()
    table.integer('progress').defaultTo(0)
    table.string('status', 20).defaultTo('draft')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  // Create job_market_data table
  await knex.schema.createTable('job_market_data', (table) => {
    table.string('id', 36).primary()
    table.string('location_city', 100).notNullable()
    table.string('location_state', 100).notNullable()
    table.string('skill_id', 36).references('id').inTable('skills').onDelete('CASCADE')
    table.integer('total_jobs').notNullable()
    table.decimal('average_salary', 10, 2)
    table.decimal('demand_growth_percentage', 5, 2)
    table.date('data_date').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  // Create indexes
  await knex.schema.alterTable('users', (table) => {
    table.index('email', 'idx_users_email')
    table.index(['location_city', 'location_state', 'location_country'], 'idx_users_location')
  })
  
  await knex.schema.alterTable('user_skills', (table) => {
    table.index('user_id', 'idx_user_skills_user_id')
  })
  
  await knex.schema.alterTable('job_market_data', (table) => {
    table.index(['location_city', 'location_state'], 'idx_job_market_location')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('job_market_data')
  await knex.schema.dropTableIfExists('learning_roadmaps')
  await knex.schema.dropTableIfExists('user_skills')
  await knex.schema.dropTableIfExists('skills')
  await knex.schema.dropTableIfExists('users')
}
