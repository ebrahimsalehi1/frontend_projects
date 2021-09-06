
n = int(input(''))
nList = list(map(lambda x:int(x),list(str(n).strip())))

maxB = sum(nList)

def is_primt(n):
    result = True
    for i in range(2,n//2+1):
        if n%i==0:
            result = False

    return result

k =n+1;
numberOfPrime = 0
while True:
    if is_primt(k):
        numberOfPrime = numberOfPrime+1;

    if numberOfPrime==maxB:
        print(k)
        break

    k = k+1

