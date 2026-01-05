@echo off
echo 🔄 Quick Redeploy to Vercel...
echo.

echo ✅ Adding changes to git...
git add .

set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update portfolio

echo ✅ Committing changes...
git commit -m "%commit_msg%"

echo ✅ Pushing to GitHub...
git push origin main

echo.
echo 🎉 Changes pushed! Vercel will auto-deploy in a few seconds.
echo Check your live site in about 30-60 seconds.
pause