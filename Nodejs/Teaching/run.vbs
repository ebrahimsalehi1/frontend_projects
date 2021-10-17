Set oShell = CreateObject ("WScript.Shell") 
oShell.run "cmd.exe /C ""npm install --save "" ",1,True


choice=inputbox("1-HR , 2-SHOP")
if choice=1 then
	oShell.run "cmd.exe /C ""npm run start:hr & Pause"" ",1,True
else
	oShell.run "cmd.exe /C ""npm run start:shop"" "
end if