n=int(input(''))
arr=[]
for i in range(n):
    line = list(map(lambda x:int(x),input('').split(' ')))
    arr.append({'price':0,'quality':0})
    arr[i]['price']=line[0]
    arr[i]['quality']=line[1]

count=0
for i in range(n):
    flag=True
    for j in range(i+1,n):
        if arr[i]['price']>=arr[j]['price'] and arr[i]['quality']<=arr[j]['quality']:
            flag = False
            break

if flag==True:
    count = count+1

print(n-count)
