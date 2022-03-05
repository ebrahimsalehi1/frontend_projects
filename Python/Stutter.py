import math

line = input('')

count = 0
for ch in line:
    if ch in ('F','L','T','D'):
        count=count+1

print(int(math.pow(2,count)))
