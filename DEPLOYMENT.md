# PathByte Deployment Guide

This guide will help you deploy the PathByte application to production.

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 15+
- Docker and Docker Compose (optional)
- A domain name and SSL certificate (for production)

## Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PathByte
   ```

2. **Start the application**
   ```bash
   # On Windows
   deploy.bat
   
   # On Linux/Mac
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## Manual Deployment

### Backend Setup

1. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your production values
   ```

3. **Set up the database**
   ```bash
   # Create PostgreSQL database
   createdb pathbyte_prod
   
   # Run migrations
   npm run db:migrate
   ```

4. **Build and start**
   ```bash
   npm run build
   npm start
   ```

### Frontend Setup

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Serve the built files**
   ```bash
   npm run preview
   ```

## Production Configuration

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-domain.com

# Database
DB_HOST=your-db-host
DB_PORT=5432
DB_NAME=pathbyte_prod
DB_USER=your-db-user
DB_PASSWORD=your-secure-password

# JWT Secret (CHANGE THIS!)
JWT_SECRET=your-super-secure-jwt-secret

# Logging
LOG_LEVEL=warn

# External APIs (optional)
LINKEDIN_API_KEY=your_key
INDEED_API_KEY=your_key
GLASSDOOR_API_KEY=your_key
```

### Database Setup

1. **Create production database**
   ```sql
   CREATE DATABASE pathbyte_prod;
   CREATE USER pathbyte_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE pathbyte_prod TO pathbyte_user;
   ```

2. **Run migrations**
   ```bash
   cd backend
   NODE_ENV=production npm run db:migrate
   ```

### SSL Configuration

For production, you'll need SSL certificates. You can use Let's Encrypt:

```bash
# Install certbot
sudo apt install certbot

# Get certificate
sudo certbot certonly --standalone -d your-domain.com
```

### Nginx Configuration

Create `/etc/nginx/sites-available/pathbyte`:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Monitoring and Logging

### Health Checks

The application includes health check endpoints:

- Backend: `GET /health`
- Database: `GET /api/auth/test-db`

### Logging

Logs are written to:
- `backend/logs/combined.log` - All logs
- `backend/logs/error.log` - Error logs only

### Process Management

Use PM2 for process management:

```bash
# Install PM2
npm install -g pm2

# Start backend
cd backend
pm2 start dist/index.js --name "pathbyte-backend"

# Start frontend (if not using nginx)
cd frontend
pm2 start "npm run preview" --name "pathbyte-frontend"

# Save PM2 configuration
pm2 save
pm2 startup
```

## Security Considerations

1. **Change default passwords and secrets**
2. **Use environment variables for sensitive data**
3. **Enable HTTPS in production**
4. **Set up proper CORS origins**
5. **Use rate limiting**
6. **Regular security updates**

## Troubleshooting

### Common Issues

1. **Database connection failed**
   - Check database credentials
   - Ensure database is running
   - Verify network connectivity

2. **Frontend not loading**
   - Check if backend is running
   - Verify API URL configuration
   - Check browser console for errors

3. **Build failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

### Logs

Check application logs for detailed error information:

```bash
# Backend logs
tail -f backend/logs/combined.log

# PM2 logs
pm2 logs pathbyte-backend
```

## Support

For deployment issues, check:
1. Application logs
2. Database connectivity
3. Environment variables
4. Network configuration

## Performance Optimization

1. **Enable gzip compression**
2. **Use CDN for static assets**
3. **Implement caching strategies**
4. **Database query optimization**
5. **Load balancing for high traffic**
