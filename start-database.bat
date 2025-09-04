@echo off
echo Starting PathByte Database with Docker...
echo.

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not running. Please start Docker Desktop first.
    echo.
    pause
    exit /b 1
)

echo Docker is running. Starting PostgreSQL...
echo.

REM Start the database services
docker-compose up -d postgres

echo.
echo Waiting for PostgreSQL to start...
timeout /t 10 /nobreak >nul

REM Check if PostgreSQL is ready
docker-compose exec postgres pg_isready -U postgres
if %errorlevel% equ 0 (
    echo.
    echo ✅ PostgreSQL is running successfully!
    echo 📊 Database: pathbyte_dev
    echo 🔌 Port: 5432
    echo 👤 User: postgres
    echo 🔑 Password: password
    echo.
    echo 🌐 pgAdmin (optional): http://localhost:5050
    echo    Email: admin@pathbyte.com
    echo    Password: admin
    echo.
    echo You can now start the backend server!
) else (
    echo.
    echo ❌ PostgreSQL failed to start. Check the logs:
    docker-compose logs postgres
)

echo.
pause
