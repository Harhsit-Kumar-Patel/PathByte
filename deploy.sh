#!/bin/bash

# Frontend Build with dependency fix
echo "Building Frontend..."
cd frontend
npm install --legacy-peer-deps
npm run build
cd ..

# Backend Build
echo "Building Backend..."
cd backend
npm install
npm run build
cd ..

echo "Build process completed successfully."