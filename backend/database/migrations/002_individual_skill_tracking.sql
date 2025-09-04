-- Individual skill tracking migration
-- This migration adds tables to support detailed skill progress tracking

-- Individual skill progress table
CREATE TABLE individual_skill_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id VARCHAR(100) NOT NULL, -- e.g., 'frontend', 'backend', etc.
    year_id VARCHAR(20) NOT NULL, -- e.g., '0-1', '1-3', etc.
    skill_name VARCHAR(200) NOT NULL,
    overall_progress INTEGER DEFAULT 0 CHECK (overall_progress >= 0 AND overall_progress <= 100),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, role_id, year_id, skill_name)
);

-- Sub-skill progress table
CREATE TABLE sub_skill_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    individual_skill_progress_id UUID NOT NULL REFERENCES individual_skill_progress(id) ON DELETE CASCADE,
    sub_skill_name VARCHAR(300) NOT NULL,
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(individual_skill_progress_id, sub_skill_name)
);

-- Create indexes for better performance
CREATE INDEX idx_individual_skill_progress_user_role ON individual_skill_progress(user_id, role_id, year_id);
CREATE INDEX idx_individual_skill_progress_skill ON individual_skill_progress(skill_name);
CREATE INDEX idx_sub_skill_progress_individual_skill ON sub_skill_progress(individual_skill_progress_id);
CREATE INDEX idx_sub_skill_progress_completed ON sub_skill_progress(completed);

-- Add trigger to update overall progress when sub-skills change
CREATE OR REPLACE FUNCTION update_individual_skill_progress()
RETURNS TRIGGER AS $$
BEGIN
    -- Update the overall progress for the individual skill
    UPDATE individual_skill_progress 
    SET 
        overall_progress = (
            SELECT 
                CASE 
                    WHEN COUNT(*) = 0 THEN 0
                    ELSE ROUND((COUNT(*) FILTER (WHERE completed = true) * 100.0) / COUNT(*))
                END
            FROM sub_skill_progress 
            WHERE individual_skill_progress_id = COALESCE(NEW.individual_skill_progress_id, OLD.individual_skill_progress_id)
        ),
        last_updated = CURRENT_TIMESTAMP
    WHERE id = COALESCE(NEW.individual_skill_progress_id, OLD.individual_skill_progress_id);
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create trigger for sub-skill progress updates
CREATE TRIGGER trigger_update_individual_skill_progress
    AFTER INSERT OR UPDATE OR DELETE ON sub_skill_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_individual_skill_progress();
