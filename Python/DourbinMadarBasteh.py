#2794

arr=[]
for i in range(3):
    line=input('').split(' ')
    arr.append(int(line[0]))
    arr.append(int(line[1]))

for elem in arr:
    if arr.count(elem)==1:
        if arr.index(elem)%2==0:
            x=elem
        else:
            y=elem


print(x,y)

