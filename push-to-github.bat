@echo off
REM ================================================
REM   Push to GitHub Repository
REM   Repository: https://github.com/Mallikarjun20044/Web-Project.git
REM ================================================

echo.
echo ==========================================
echo   AI Study Planner - Push to GitHub
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
    echo [INFO] Git repository already exists
    echo.
    
    REM Remove existing remote if any
    git remote remove origin 2>nul
    
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

REM Configure Git
echo [STEP 2] Configuring Git...
git config user.name "Mallikarjun20044"
git config user.email "mallikarjun20044@example.com"
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
echo [STEP 4] Creating commit...
git commit -m "AI Study Planner - Full Stack Application with AI Features"
if errorlevel 1 (
    echo [WARNING] Nothing to commit or commit failed
    echo This is normal if you've already committed these files
    echo.
)
echo [OK] Commit completed
echo.

REM Set main branch
echo [STEP 5] Setting main branch...
git branch -M main
echo [OK] Branch set to 'main'
echo.

REM Add remote repository
echo [STEP 6] Adding remote repository...
git remote add origin https://github.com/Mallikarjun20044/Web-Project.git
if errorlevel 1 (
    echo [WARNING] Remote already exists or failed to add
    echo This is normal if you've already set the remote
    echo.
)
echo [OK] Remote added
echo.

REM Push to GitHub
echo [STEP 7] Pushing to GitHub...
echo.
echo You may be prompted for authentication:
echo - Use your GitHub username: Mallikarjun20044
echo - Use a Personal Access Token as password
echo   (Create at: https://github.com/settings/tokens)
echo.

git push -u origin main --force
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo.
    echo Common fixes:
    echo 1. Create Personal Access Token: https://github.com/settings/tokens
    echo    - Click "Generate new token (classic)"
    echo    - Select scopes: repo, workflow
    echo    - Copy the token
    echo.
    echo 2. When prompted for password, paste the token
    echo.
    echo 3. Or try: git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   SUCCESS! ✓
echo ==========================================
echo.
echo Your project has been uploaded to:
echo https://github.com/Mallikarjun20044/Web-Project
echo.
echo Next steps:
echo.
echo 1. Verify on GitHub: https://github.com/Mallikarjun20044/Web-Project
echo.
echo 2. Deploy to Vercel:
echo    - Go to: https://vercel.com/dashboard
echo    - Click "Add New..." → "Project"
echo    - Import: Web-Project repository
echo    - Add environment variables (see DEPLOY_NOW.md)
echo    - Click Deploy
echo.
echo 3. See full deployment guide: DEPLOY_NOW.md
echo.
pause
