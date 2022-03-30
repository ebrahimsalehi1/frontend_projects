#   15124

a,b,x=input('').split(' ')
a=int(a)
b=int(b)
x=int(x)

count=0
for i in range(1,x):
    for j in range(1,x):
        if (i%a==0 or a%i==0) and (j%b==0 or b%j==0) and i+j<=x:
            count=count+1
            print((i,j))

print(count)