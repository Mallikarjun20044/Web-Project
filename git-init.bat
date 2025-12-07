@echo off
REM ================================================
REM   GitHub Upload Helper Script
REM   Run this to initialize Git and push to GitHub
REM ================================================

echo.
echo ==========================================
echo   AI Study Planner - GitHub Upload
echo ==========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Check if already initialized
if exist ".git" (
    echo [INFO] Git repository already initialized
    echo.
) else (
    echo [STEP 1] Initializing Git repository...
    git init
    if errorlevel 1 (
        echo [ERROR] Failed to initialize Git
        pause
        exit /b 1
    )
    echo [OK] Git initialized
    echo.
)

REM Configure Git (if not already configured)
echo [STEP 2] Configuring Git...
echo.
echo Please enter your GitHub username:
set /p GIT_USER=Username: 
echo.
echo Please enter your GitHub email:
set /p GIT_EMAIL=Email: 
echo.

git config user.name "%GIT_USER%"
git config user.email "%GIT_EMAIL%"

echo [OK] Git configured
echo.

REM Add all files
echo [STEP 3] Adding all files to Git...
git add .
if errorlevel 1 (
    echo [ERROR] Failed to add files
    pause
    exit /b 1
)
echo [OK] Files added
echo.

REM Commit
echo [STEP 4] Creating initial commit...
git commit -m "Initial commit: AI Study Planner - Full Stack Application"
if errorlevel 1 (
    echo [ERROR] Failed to commit
    pause
    exit /b 1
)
echo [OK] Commit created
echo.

REM Set main branch
echo [STEP 5] Setting main branch...
git branch -M main
echo [OK] Branch set to 'main'
echo.

echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo NEXT STEPS:
echo.
echo 1. Create a new repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Repository name: ai-study-planner
echo    Description: AI-powered Study Planner for students
echo    Visibility: Public
echo    DO NOT initialize with README
echo.
echo 3. After creating the repository, copy the URL (example):
echo    https://github.com/YOUR_USERNAME/ai-study-planner.git
echo.
echo 4. Run this command (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git
echo    git push -u origin main
echo.
echo 5. If prompted for authentication, use:
echo    - Personal Access Token (recommended)
echo    - Create at: https://github.com/settings/tokens
echo.
pause
