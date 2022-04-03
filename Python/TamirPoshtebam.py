# 6582

n=int(input(''))
arr=[(0,0)]

my_list = map(lambda x:int(x),input('').split(' '))
index = 1

for elem in my_list:
    arr.append((index,elem))
    index = index +1

arr = sorted(arr,key=lambda x:x[1])
# deleted an element
prev=0
index=0
for elem in arr:
    if prev>elem[0]:
        del arr[index]

    index=index+1
    prev=elem[0]

# make result

sum=0
prev=(0,0)
for elem in arr:
    sum=sum+(elem[0]-prev[0])*elem[1]
    prev=elem
    # print(elem)

print(sum)    
