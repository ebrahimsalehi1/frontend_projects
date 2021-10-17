
start cmd.exe /k "npm install --save " 

set /p choice = "1-HR or 2-SHOP : Please Type 1 or 2 ?" 
if %choice%==1
	start cmd /k "npm run json:hr"

if %choice%==2
	start cmd /k "npm run json:hr"

pause