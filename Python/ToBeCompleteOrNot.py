
n = int(input(''))

sumOfDiv = 0
for i in range(1,n//2+1):
    sumOfDiv = sumOfDiv+(i if n%i==0 else 0)

if sumOfDiv==n:
    print('YES')    
else:
    print('NO')
