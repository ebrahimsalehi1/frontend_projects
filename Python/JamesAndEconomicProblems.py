

line = list(input('').strip().split(' '))
n , k = int(line[0]) , int(line[1])

arr = list(map(lambda x:int(x),input('').strip().split(' ')))
arr = sorted(arr)

i=0
j=n-1
while True:
    if i>=j:
        break

    if arr[j]<k and arr[j]>0:
        arr[i]=arr[i]-(k-arr[j])
        arr[j]=k
        j=j-1
        if arr[i]==0:
            i=i+1
    else:
        j=j-1

cnt = sum(map(lambda x:x==0,arr))
print(cnt)
