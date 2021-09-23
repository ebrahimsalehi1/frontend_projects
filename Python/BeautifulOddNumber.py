
n = int(input(''))

def is_prime(n):
    for i in range(2,n//2+1):
        if n%i==0:
            return False

    return True

def is_beautiful(n):
    cnumberOfC = 0
    for i in range(2,n//2+1):
        if n%i==0 and is_prime(i):
            # print(i)
            cnumberOfC=cnumberOfC+1


    return is_prime(cnumberOfC)

# print(is_beautiful(n))


sumation = 0
for i in range(1,n+1):
    if is_beautiful(i):
        sumation = sumation+i

if sumation==0:
    print('NOT FOUND!')
else:
    print(sumation)