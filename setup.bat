@echo off
REM AI Study Planner - Setup Script for Windows
REM This script automates the setup process

echo.
echo ==========================================
echo   AI Study Planner - Setup Wizard
echo ==========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed. Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [✓] Git installed: 
git --version

echo [✓] Node.js installed: 
node --version

echo.
echo Step 1: Installing dependencies...
echo.
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo [✓] Dependencies installed successfully!
echo.

echo Step 2: Checking configuration...
if not exist ".env" (
    echo [!] .env file not found. Creating from .env.example...
    copy .env.example .env
    echo [✓] .env created. Please update with your MongoDB URI
)

echo.
echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Next steps:
echo.
echo 1. Start MongoDB:
echo    mongod
echo.
echo 2. In another terminal, start the development server:
echo    npm run dev
echo.
echo 3. Open your browser:
echo    http://localhost:5000
echo.
echo For deployment instructions, see: DEPLOYMENT.md
echo.
pause
