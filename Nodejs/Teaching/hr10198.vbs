Set oShell = CreateObject ("WScript.Shell") 
oShell.run "cmd.exe /C ""npm install --save "" ",1,True


oShell.run "cmd.exe /C ""npm run start:hr & Pause"" ",1,True
