n = int(input(''))
str = input('')

i=0
res=0

k=0
for ch in str:    
    if i%6 in (0,1):
        res=3
    elif i%6 in (2,3):
        res=1
    elif i%6 in (4,5):
        res=2
    
    i=i+1
    if int(ch)==res:
        k=k+1

i=0
n=0
for ch in str:    
    if i%3 == 0:
        res=1
    elif i%3 == 1:
        res=2
    elif i%3 == 2:
        res=3
    
    i=i+1
    if int(ch)==res:
        n=n+1

i=0
s=0
for ch in str:    
    if i%4 == 0:
        res=2
    elif i%4 == 1:
        res=1
    elif i%4 == 2:
        res=2
    elif i%4 == 3:
        res=3

    i=i+1
    if int(ch)==res:
        s=s+1

mmax = max(k,n,s)
print(mmax)  

if mmax==k:
    print('keyvoon')
if mmax==n:
    print('nezam')
if mmax==s:
    print('shir farhad')
