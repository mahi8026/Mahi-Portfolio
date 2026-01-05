@echo off
echo 🚀 Deploying Mahi's Portfolio to Vercel...
echo.

echo ✅ Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 🌐 Starting Vercel deployment...
call vercel --prod

echo.
echo 🎉 Deployment process completed!
echo Check your Vercel dashboard for the live URL.
pause