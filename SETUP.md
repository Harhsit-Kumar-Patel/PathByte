# 🚀 PathByte Setup Guide

This guide will help you get the PathByte Tech Stack Recommendation Engine running locally on your machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **PostgreSQL** (v14 or higher) - [Download here](https://www.postgresql.org/download/)
- **Git** - [Download here](https://git-scm.com/)
- **npm** or **yarn** (comes with Node.js)

## 🗄️ Database Setup

### 1. Install PostgreSQL
- Download and install PostgreSQL from the official website
- During installation, note down the password you set for the `postgres` user
- Make sure PostgreSQL service is running

### 2. Create Database
```bash
# Connect to PostgreSQL as postgres user
psql -U postgres

# Create the database
CREATE DATABASE pathbyte_dev;

# Verify the database was created
\l

# Exit psql
\q
```

### 3. Configure Environment Variables
```bash
# Navigate to backend directory
cd backend

# Copy the environment example file
cp env.example .env

# Edit .env file with your database credentials
# Update these values:
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pathbyte_dev
DB_USER=postgres
DB_PASSWORD=your_actual_password
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## 🔧 Backend Setup

### 1. Install Dependencies
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### 2. Run Database Migrations
```bash
# Run migrations to create tables
npm run db:migrate

# (Optional) Seed with sample data
npm run db:seed
```

### 3. Start Backend Server
```bash
# Start in development mode
npm run dev

# The server will start on http://localhost:5000
# You should see: "🚀 PathByte API server running on port 5000"
```

## 🎨 Frontend Setup

### 1. Install Dependencies
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### 2. Start Frontend Development Server
```bash
# Start in development mode
npm run dev

# The frontend will start on http://localhost:3000
# You should see the PathByte homepage
```

## 🧪 Testing the Setup

### 1. Backend Health Check
```bash
# Test the backend API
curl http://localhost:5000/health

# Expected response:
# {
#   "status": "OK",
#   "timestamp": "2024-01-01T00:00:00.000Z",
#   "uptime": 123.456,
#   "environment": "development"
# }
```

### 2. Frontend Access
- Open your browser and navigate to `http://localhost:3000`
- You should see the PathByte homepage with navigation
- Try navigating to different pages (Dashboard, Roadmap, etc.)

### 3. Test User Registration
```bash
# Test user registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "locationCity": "Austin",
    "locationState": "TX",
    "locationCountry": "USA",
    "experienceLevel": "beginner",
    "targetRole": "Frontend Developer"
  }'
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Database Connection Failed
```bash
# Check if PostgreSQL is running
# On Windows:
services.msc  # Look for "postgresql-x64-14" service

# On macOS:
brew services list | grep postgresql

# On Linux:
sudo systemctl status postgresql
```

#### 2. Port Already in Use
```bash
# Check what's using the port
# On Windows:
netstat -ano | findstr :5000

# On macOS/Linux:
lsof -i :5000

# Kill the process or change the port in .env
```

#### 3. Frontend Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

#### 4. Database Migration Errors
```bash
# Reset database
npm run db:rollback

# Re-run migrations
npm run db:migrate
```

## 📁 Project Structure

```
PathByte/
├── frontend/                 # React + TypeScript + Tailwind CSS
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── types/          # TypeScript definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js + Express + PostgreSQL
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Custom middleware
│   │   ├── config/         # Database and app config
│   │   └── utils/          # Utility functions
│   ├── database/           # Database migrations
│   └── package.json        # Backend dependencies
└── README.md               # Project overview
```

## 🔄 Development Workflow

### 1. Making Changes
- Frontend changes auto-reload at `http://localhost:3000`
- Backend changes auto-reload at `http://localhost:5000`
- Database changes require migration: `npm run db:migrate`

### 2. Adding New Features
- Create new routes in `backend/src/routes/`
- Create new pages in `frontend/src/pages/`
- Update types in `frontend/src/types/`
- Add database tables via migrations

### 3. Testing
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 🚀 Next Steps

Now that you have the basic setup running, you can:

1. **Explore the Codebase**: Familiarize yourself with the project structure
2. **Implement Core Features**: Start building the roadmap generation algorithm
3. **Add Job Market Integration**: Connect to external APIs for real-time data
4. **Build the Community**: Implement study groups and peer learning features
5. **Add Premium Features**: Implement subscription management and AI coaching

## 📞 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Check the database connection and migrations
4. Ensure all environment variables are set correctly

## 🎯 Success Metrics

You'll know the setup is working when:

- ✅ Backend server starts without errors
- ✅ Database tables are created successfully
- ✅ Frontend loads at `http://localhost:3000`
- ✅ You can register a new user
- ✅ API endpoints respond correctly

Happy coding! 🚀
