

n = int(input(''))

arr = list(map(lambda x:int(x),input().split()))

status = True
for i in range(1,n):
    if i+1<n and arr[i]>arr[i-1] and arr[i]>arr[i+1] :
        status=False
        break

if status:
    print('Bah Bah! Ajab jooji!')
else:
    print('Ey baba :(')  
