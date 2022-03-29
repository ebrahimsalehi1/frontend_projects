# 4067

t=int(input(''))
arr=[]
for i in range(t):
    line=input('').split(' ')
    arr.append((int(line[0]),int(line[1]),-1))

calc=lambda x,y:(x+y if x%2==0 and y%2==0 else x+y-1) if x==y else (x+y if x%2==0 and y%2==0 else x+y-1) if x==y+2 else -1

for a in arr:
    print(calc(a[0],a[1]))