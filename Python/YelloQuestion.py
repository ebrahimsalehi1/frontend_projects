import sys

n = int(input(''))
if not(n>=1 and n<=10):
    sys.exit()

s=''
for i in range(n):
    s+='o'
    
print('W{}w!'.format(s))