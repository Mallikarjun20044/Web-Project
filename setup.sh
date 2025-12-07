#!/bin/bash

# AI Study Planner - Setup Script for macOS/Linux
# This script automates the setup process

echo ""
echo "=========================================="
echo "   AI Study Planner - Setup Wizard"
echo "=========================================="
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed. Please install Git from https://git-scm.com/"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "[✓] Git installed: $(git --version)"
echo "[✓] Node.js installed: $(node --version)"
echo ""

echo "Step 1: Installing dependencies..."
echo ""
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: npm install failed"
    exit 1
fi

echo ""
echo "[✓] Dependencies installed successfully!"
echo ""

echo "Step 2: Checking configuration..."
if [ ! -f ".env" ]; then
    echo "[!] .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "[✓] .env created. Please update with your MongoDB URI"
fi

echo ""
echo "=========================================="
echo "   Setup Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Start MongoDB:"
echo "   mongod"
echo ""
echo "2. In another terminal, start the development server:"
echo "   npm run dev"
echo ""
echo "3. Open your browser:"
echo "   http://localhost:5000"
echo ""
echo "For deployment instructions, see: DEPLOYMENT.md"
echo ""
