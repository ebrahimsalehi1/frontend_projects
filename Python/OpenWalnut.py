
line1 = input('').strip('').split(' ')

n = int(line1[0])
x = int(line1[1])
y = int(line1[2])

obj={"i":0,"j":0}
flag = False
for i in range(1,n+1):
    if (n-x*i)%y==0:
        obj['i']=i
        obj['j']=int((n-x*i)/y)
        break
    # j=0
    # while  j<=n//y:
    #     if x*i+y*j==n:
    #         obj['i']=i
    #         obj['j']=j
    #         flag=True
    #         break
    #     j=j+1

    # if flag:
    #     break

if obj['i']==0 and obj['j']==0:
    print('-1')
else:
    print(obj['i'],obj['j'])    
