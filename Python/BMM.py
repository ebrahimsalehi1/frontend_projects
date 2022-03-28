
n1 = int(input(''))
n2 = int(input(''))

valBigger = max([n1,n2])
valSmaller = min([n1,n2])

def BMM(m,n):
    if n==0:
        return m
    else:
        return BMM(n,m%n)
res=BMM(valBigger,valSmaller)
print(-res if res<0 else res)        
