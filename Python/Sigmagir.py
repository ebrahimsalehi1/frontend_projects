
import math 

n = int(input(''))
m = int(input(''))

sigmaResult = 0

for i in range(-10,m+1):
    for j in range(1,n+1):
            sigmaResult = sigmaResult+int(math.pow((i+j),3)/math.pow(j,2))

print((sigmaResult))
