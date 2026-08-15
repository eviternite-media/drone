@echo off
setlocal
set "SOURCE=%~dp0"
set "DEST=C:\Users\Eviternite\OneDrive\Desktop\Video\Music\drone-romania-site"

echo.
echo Instalare website AERIS ONE...
if not exist "%DEST%" mkdir "%DEST%"
xcopy "%SOURCE%*" "%DEST%\" /E /I /Y /EXCLUDE:"%SOURCE%install-exclude.txt" >nul

if errorlevel 1 (
  echo.
  echo Instalarea nu a putut fi finalizata.
  echo Copiaza manual folderul in:
  echo %DEST%
  pause
  exit /b 1
)

echo.
echo Website-ul a fost copiat in:
echo %DEST%
echo.
echo Se deschide pagina principala...
start "" "%DEST%\index.html"
pause
endlocal
