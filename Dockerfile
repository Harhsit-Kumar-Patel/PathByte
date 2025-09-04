# Use Node.js 20 Alpine image
FROM node:20-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install root dependencies
RUN npm ci

# Install backend dependencies
RUN cd backend && npm ci

# Copy source code
COPY backend/ ./backend/

# Build the application
RUN cd backend && npm run build

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start the application
WORKDIR /app/backend
CMD ["npm", "start"]