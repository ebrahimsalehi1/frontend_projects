# Soale Nafas Gir

n =int(input(''))
a=list(map(lambda x:int(x),input('').split(' ')))
b=list(map(lambda x:int(x),input('').split(' ')))

res=0
for i in range(n):
    res=res+a[i]*b[i]

print(res)    

