-- Initialize PathByte Database
-- This script runs when the PostgreSQL container starts for the first time

-- Create the main database if it doesn't exist
-- (The database is already created by POSTGRES_DB environment variable)

-- Set up extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create a simple test table to verify the setup
CREATE TABLE IF NOT EXISTS test_connection (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a test record
INSERT INTO test_connection (message) VALUES ('PathByte database initialized successfully!');

-- Display success message
DO $$
BEGIN
    RAISE NOTICE 'PathByte database initialization completed successfully!';
END $$;
