n=int(input(''))
arr=[]
for i in range(n):
    line = list(map(lambda x:int(x),input('').split(' ')))
    arr.append((line[0],line[1]))

initial_area = int(input(''))
final_area = int(input(''))

# print(*(arr))

count=0
for i in range(initial_area,final_area+1):
    flag = False
    for p in arr:
        if p[0]<=i and i<=p[1]:
            flag=True
            break

    if flag==True:
        count=count+1

if final_area-initial_area+1==count:
    print('true')
else:
    print('false')
