
import math

line = input('').strip('').split(' ')
m = line[0]
n = line[1]
# print(m,n)
digits = str(math.factorial(int(m)))
print(digits.count(n))
