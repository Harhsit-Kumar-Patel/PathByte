# 🚀 PathByte Backend Deployment Guide

## Quick Deploy Options

### Option 1: Railway (Recommended)

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with GitHub
3. **Create New Project** → **Deploy from GitHub repo**
4. **Select your PathByte repository**
5. **Choose the `backend` folder** as the root directory
6. **Add PostgreSQL database** in the same project

**Environment Variables to set in Railway:**
```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-netlify-app.netlify.app
DB_HOST=your-railway-db-host
DB_PORT=5432
DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=your-railway-db-password
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
LOG_LEVEL=info
```

### Option 2: Render

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login** with GitHub
3. **New** → **Web Service**
4. **Connect your GitHub repo**
5. **Select backend folder**
6. **Add PostgreSQL database**

**Environment Variables to set in Render:**
```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-netlify-app.netlify.app
DATABASE_URL=your-render-database-url
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
LOG_LEVEL=info
```

## Database Setup

### For Railway:
- Railway will provide you with database credentials
- Use the provided `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`

### For Render:
- Render provides a `DATABASE_URL` environment variable
- Update your database config to use this URL

## After Deployment

1. **Get your backend URL** (e.g., `https://your-app.railway.app`)
2. **Update frontend API URL** in `frontend/src/lib/api.ts`
3. **Test the deployment** by visiting `https://your-backend-url/health`

## Testing Your Deployment

```bash
# Health check
curl https://your-backend-url/health

# Database test
curl https://your-backend-url/api/auth/test-db
```

## Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in `package.json`
2. **Database connection fails**: Verify environment variables
3. **Port issues**: Make sure your app uses `process.env.PORT || 5000`

### Logs:
- Railway: Check the logs tab in your project dashboard
- Render: Check the logs in your service dashboard
