Set oShell = CreateObject ("WScript.Shell") 
oShell.run "cmd.exe /C ""npm install --save & Pause"" ",1,True
oShell.run "cmd.exe /C ""npm run json:server"" "