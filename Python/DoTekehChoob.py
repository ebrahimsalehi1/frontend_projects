
l = list(map(lambda x:int(x),input().split()))
a=l[0]
b=l[1]

if a==b:
    print('NO')
else:
    print('YES')    

def check(a,b):
    mustBeBreak = max(a,b)
    x=min(a,b)

    flag =False
    for i in range(1,mustBeBreak):
        y=i
        z=mustBeBreak - i
        if x<y+z and y<x+z and z<x+y:
            # print('answer',x,y,z)
            flag=True
            break

    if flag:
        return 'YES' 
    else:
        return 'NO'

# for i in range(1,100):
#     for j in range(1,100):
#         if check(i,j)=='NO':
#             print(i,j)