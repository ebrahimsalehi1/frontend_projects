
a = int(input(''))
b = int(input(''))

def is_prime(n):
    for i in range(2,n//2+1):
        if n%i==0:
            return False

    return True

list = []
for i in range(a+1,b):
    if is_prime(i):
        list.append(i)

print(*list,sep=',')                
