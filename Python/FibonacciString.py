
n=int(input(''))

arr = [0 for i in range(100+1)]

def fib(n):
    for i in range(1,n+1):
        if i==1:
            arr[i]=1
        elif i==2:
            arr[i]=2
        else:
            arr[i] = arr[i-1]+arr[i-2]

     
fib(n)

sOut=''
for i in range(1,n+1):
    if i in arr:
        sOut=sOut+'+'
    else:
        sOut=sOut+'-'

print(sOut)

