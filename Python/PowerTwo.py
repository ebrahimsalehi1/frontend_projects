import math 

n = int(input(''))

for i in range(n):
    powNum = math.pow(2,i)
    if powNum > n:
        break;

print(int(powNum))
