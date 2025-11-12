#!/bin/bash

# Replit Deployment Test Script
echo "🚀 Testing LAN Chat deployment on Replit..."

# Check Node.js version
echo "📦 Node.js version: $(node --version)"

# Check npm version
echo "📦 NPM version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found, copying from .env.replit..."
    cp .env.replit .env
fi

# Build frontend
echo "🔨 Building frontend..."
npm run build

# Create uploads directory
echo "📁 Creating uploads directory..."
mkdir -p server/uploads

# Test server startup
echo "🧪 Testing server startup..."
timeout 10s npm start &
SERVER_PID=$!

# Wait a bit
sleep 5

# Check if server is running
if kill -0 $SERVER_PID 2>/dev/null; then
    echo "✅ Server started successfully!"
    kill $SERVER_PID
else
    echo "❌ Server failed to start"
    exit 1
fi

echo "🎉 All tests passed! Ready for deployment."