@echo off
chcp 65001 > nul
echo ========================================================
echo   🏛️ SGR La Serena - Subir Front-End a GitHub
echo   Repositorio destino: https://github.com/flyyyy98/sgr-sistema-frontend
echo ========================================================
echo.
echo 1. Asegúrate de haber creado el repositorio en GitHub:
echo    https://github.com/new  (Nombre: sgr-sistema-frontend)
echo.
echo Presiona cualquier tecla para iniciar 'git push -u origin main'...
pause > nul
git push -u origin main
echo.
echo ========================================================
echo   Proceso finalizado.
echo ========================================================
pause
