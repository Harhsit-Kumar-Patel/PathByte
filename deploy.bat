@echo off
echo 🚀 Starting PathByte deployment...

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker is not installed. Please install Docker first.
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Compose is not installed. Please install Docker Compose first.
    exit /b 1
)

REM Build and start services
echo [INFO] Building and starting services...
docker-compose up --build -d

REM Wait for services to be ready
echo [INFO] Waiting for services to be ready...
timeout /t 10 /nobreak >nul

REM Check if services are running
echo [INFO] Checking service health...

REM Check backend health
curl -f http://localhost:5000/health >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] ✅ Backend is healthy
) else (
    echo [ERROR] ❌ Backend health check failed
    exit /b 1
)

REM Check frontend
curl -f http://localhost:3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] ✅ Frontend is accessible
) else (
    echo [ERROR] ❌ Frontend is not accessible
    exit /b 1
)

echo [INFO] 🎉 Deployment completed successfully!
echo [INFO] Frontend: http://localhost:3000
echo [INFO] Backend API: http://localhost:5000
echo [INFO] Health Check: http://localhost:5000/health

echo.
echo [WARNING] Don't forget to:
echo 1. Update environment variables for production
echo 2. Set up SSL certificates
echo 3. Configure your domain name
echo 4. Set up monitoring and logging
