@echo off
REM Path Verification Script
REM This script checks if all HTML files have been fixed with relative paths

echo.
echo ==========================================
echo   PATH FIX VERIFICATION
echo ==========================================
echo.

cd frontend\pages

echo Checking CSS paths in all pages...
echo.

findstr /C:"../css/styles.css" login.html >nul
if %errorlevel%==0 (
    echo [OK] login.html - CSS path fixed
) else (
    echo [ERROR] login.html - CSS path NOT fixed
)

findstr /C:"../css/styles.css" dashboard.html >nul
if %errorlevel%==0 (
    echo [OK] dashboard.html - CSS path fixed
) else (
    echo [ERROR] dashboard.html - CSS path NOT fixed
)

findstr /C:"../css/styles.css" study-planner.html >nul
if %errorlevel%==0 (
    echo [OK] study-planner.html - CSS path fixed
) else (
    echo [ERROR] study-planner.html - CSS path NOT fixed
)

findstr /C:"../css/styles.css" timetable.html >nul
if %errorlevel%==0 (
    echo [OK] timetable.html - CSS path fixed
) else (
    echo [ERROR] timetable.html - CSS path NOT fixed
)

findstr /C:"../css/styles.css" analytics.html >nul
if %errorlevel%==0 (
    echo [OK] analytics.html - CSS path fixed
) else (
    echo [ERROR] analytics.html - CSS path NOT fixed
)

findstr /C:"../css/styles.css" settings.html >nul
if %errorlevel%==0 (
    echo [OK] settings.html - CSS path fixed
) else (
    echo [ERROR] settings.html - CSS path NOT fixed
)

echo.
echo Checking JavaScript paths in all pages...
echo.

findstr /C:"../js/api.js" login.html >nul
if %errorlevel%==0 (
    echo [OK] login.html - JS path fixed
) else (
    echo [ERROR] login.html - JS path NOT fixed
)

findstr /C:"../js/api.js" dashboard.html >nul
if %errorlevel%==0 (
    echo [OK] dashboard.html - JS path fixed
) else (
    echo [ERROR] dashboard.html - JS path NOT fixed
)

findstr /C:"../js/api.js" study-planner.html >nul
if %errorlevel%==0 (
    echo [OK] study-planner.html - JS path fixed
) else (
    echo [ERROR] study-planner.html - JS path NOT fixed
)

findstr /C:"../js/api.js" timetable.html >nul
if %errorlevel%==0 (
    echo [OK] timetable.html - JS path fixed
) else (
    echo [ERROR] timetable.html - JS path NOT fixed
)

findstr /C:"../js/api.js" analytics.html >nul
if %errorlevel%==0 (
    echo [OK] analytics.html - JS path fixed
) else (
    echo [ERROR] analytics.html - JS path NOT fixed
)

findstr /C:"../js/api.js" settings.html >nul
if %errorlevel%==0 (
    echo [OK] settings.html - JS path fixed
) else (
    echo [ERROR] settings.html - JS path NOT fixed
)

echo.
echo ==========================================
echo   Verification Complete!
echo ==========================================
echo.
echo If all checks show [OK], your paths are fixed correctly.
echo You can now run: npm run dev
echo.

cd ..\..

pause
