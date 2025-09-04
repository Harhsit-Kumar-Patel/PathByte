# Individual Skill Tracking Feature

## Overview

The Individual Skill Tracking feature allows users to track their progress on specific sub-skills within each major skill area of their learning roadmap. This provides granular progress tracking beyond the high-level skill completion.

## Features

### 1. Detailed Skill Breakdown
- Each major skill (e.g., "HTML5", "CSS3", "JavaScript") is broken down into specific sub-skills
- Sub-skills are organized by learning roadmap year (0-1, 1-3, 3-5, 5+)
- Each sub-skill can be individually marked as completed

### 2. Progress Tracking
- **Individual Progress**: Track completion of each sub-skill
- **Skill Progress**: Calculate overall progress for each major skill based on sub-skill completion
- **Year Progress**: Aggregate progress across all skills in a learning year
- **Role Progress**: Overall progress across all years for a specific role

### 3. Notes and Documentation
- Add personal notes to each sub-skill
- Track completion dates
- Document learning experiences and insights

### 4. Visual Progress Indicators
- Progress bars for each skill
- Color-coded completion status (green for completed, blue for in-progress, gray for not started)
- Overall progress statistics and overview

## Implementation

### Frontend Components

#### 1. IndividualSkillTracker
- **Location**: `frontend/src/components/IndividualSkillTracker.tsx`
- **Purpose**: Displays individual skills with expandable sub-skill lists
- **Features**:
  - Expandable/collapsible skill sections
  - Individual sub-skill checkboxes
  - Notes functionality for each sub-skill
  - Progress calculation and display

#### 2. SkillProgressOverview
- **Location**: `frontend/src/components/SkillProgressOverview.tsx`
- **Purpose**: Provides a high-level overview of skill progress
- **Features**:
  - Overall progress statistics
  - Skill completion breakdown (completed, in-progress, not started)
  - Individual skill progress bars
  - Last updated timestamps

### Backend API

#### Progress Routes
- **Location**: `backend/src/routes/progress.ts`
- **Endpoints**:
  - `GET /:userId` - Get all progress for a user
  - `GET /:userId/:roleId/:yearId` - Get progress for specific role/year
  - `PUT /:userId/:roleId/:yearId/:skillName/:subSkillName` - Update sub-skill progress
  - `GET /:userId/:roleId/:yearId/:skillName/:subSkillName` - Get specific sub-skill progress
  - `DELETE /:userId/:roleId` - Reset progress for a role

### Database Schema

#### New Tables
- **individual_skill_progress**: Stores overall progress for each skill
- **sub_skill_progress**: Stores individual sub-skill completion status and notes

#### Migration
- **Location**: `backend/database/migrations/002_individual_skill_tracking.sql`
- **Features**:
  - Automatic progress calculation triggers
  - Proper indexing for performance
  - Foreign key constraints for data integrity

### Context Management

#### ProgressContext Updates
- **Location**: `frontend/src/context/ProgressContext.tsx`
- **New Methods**:
  - `markSubSkillComplete()` - Mark individual sub-skills as complete
  - `getSubSkillProgress()` - Get completion status of sub-skills
  - `getIndividualSkillProgress()` - Get overall skill progress
  - `getSubSkillNotes()` - Retrieve notes for sub-skills

## Usage Examples

### Frontend Development Roadmap

For the Frontend Development roadmap, users can track progress on:

#### HTML5 Sub-skills:
- Semantic HTML elements (header, nav, main, section, article, footer)
- Forms and input validation
- Accessibility attributes (alt, aria-label, role)
- HTML5 APIs (localStorage, sessionStorage)
- Meta tags and SEO basics
- Document structure and best practices

#### CSS3 Sub-skills:
- CSS selectors and specificity
- Box model (margin, border, padding, content)
- Positioning (static, relative, absolute, fixed, sticky)
- Flexbox layout system
- CSS Grid layout system
- Media queries and responsive design
- CSS variables (custom properties)
- Transitions and animations
- CSS transforms and 3D effects
- CSS preprocessors basics (Sass/SCSS)

#### JavaScript (ES6+) Sub-skills:
- Variables (var, let, const) and hoisting
- Functions (arrow functions, default parameters, rest/spread)
- Objects and arrays (destructuring, methods)
- Promises and async/await
- Modules (import/export)
- Classes and inheritance
- Error handling (try/catch, custom errors)
- Regular expressions
- DOM manipulation and events
- Browser APIs and Web APIs

## Benefits

1. **Granular Progress Tracking**: Users can see exactly which specific skills they've mastered
2. **Motivation**: Breaking down large skills into smaller, achievable sub-skills
3. **Learning Path Clarity**: Clear understanding of what needs to be learned next
4. **Progress Documentation**: Notes and completion dates help track learning journey
5. **Adaptive Learning**: Users can focus on specific areas that need more attention

## Future Enhancements

1. **Skill Dependencies**: Track prerequisites between sub-skills
2. **Learning Time Estimation**: Add time estimates for each sub-skill
3. **Resource Linking**: Connect sub-skills to specific learning resources
4. **Progress Analytics**: Detailed analytics on learning patterns and speed
5. **Skill Recommendations**: Suggest next skills based on current progress
6. **Social Features**: Share progress with mentors or study groups

## Technical Notes

- Progress is stored in localStorage for offline functionality
- Database synchronization can be added for multi-device support
- The system is designed to be extensible for additional skill categories
- Performance is optimized with proper database indexing
- The UI is responsive and works on all device sizes
