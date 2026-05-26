@echo off
title PeakboardHelp - Jekyll Server
cd /d "C:\Source\PeakboardHelp"
echo Installing gems (if needed) ...
call bundle install --quiet
echo.
echo Starting PeakboardHelp on http://127.0.0.1:4000/ ...
start "" powershell -NoProfile -WindowStyle Hidden -Command "while (-not (Test-NetConnection -ComputerName 127.0.0.1 -Port 4000 -InformationLevel Quiet -WarningAction SilentlyContinue)) { Start-Sleep -Seconds 2 }; Start-Process 'http://127.0.0.1:4000/'"
bundle exec jekyll serve --livereload --trace
pause
