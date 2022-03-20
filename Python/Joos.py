
s=input('')
p=input('')

if p.find(s)!=-1:
    print("Yes")
else:
    count=0
    for i in range(1,len(s)):
        if p.find(s[:-i])!=-1:
            count=count+1
    if count>int(len(s)/2):
        print("Yes")
    else:
        print("No")
