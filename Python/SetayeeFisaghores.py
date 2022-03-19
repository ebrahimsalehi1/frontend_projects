#654
n=int(input(''))
xx=int(n/2)-(1 if n%2==0 else 0)

for x in range(xx,1,-1):
    must_be_break = n-x
    flag = False
    for i in range(x,1,-1):
        y = i
        z = must_be_break - i
        # and x<y+z and y<x+z and z<x+y
        if y!=z and x*x==y*y+z*z:
            flag=True
            break

    if flag==True:
        break

if flag==True:
    print(min(y,z),max(y,z),x)
else:
    print('Impossible')    
