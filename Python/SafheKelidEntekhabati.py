n=int(input(''))

caps=False
out=[]
for i in range(n):
    s=input('')
    if s=='CAPS':
        caps = not caps
    else:
        out.append(s.upper() if caps else s.lower())   

print(*out,sep='')         