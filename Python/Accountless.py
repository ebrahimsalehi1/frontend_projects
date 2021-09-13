import math 
import sys

n= int(input(''))

arr = []
for i in range(n):
    line = input('').strip().split(' ')
    arr.append({'type':line[0],'amount':int(line[1]),'time':line[2],'status':line[3] if len(line)==4 else ''})

sortedArr = sorted(arr,key=lambda x:x['time'])    

# filteredArr = filter(lambda x:x['status']!='FAIL',sortedArr)

sumation = 0
minVal = 0
mult = 1
for item in sortedArr:
    if item['type']=='DEP':
        mult=1
    elif item['type']=='WIT' and item['status']!='FAIL':
        mult=-1
    elif item['type']=='WIT' and item['status']=='FAIL':
        mult=0

    if mult==0 and abs(sumation)>item['amount']:
        print('DOROGHE')
        sys.exit()

    sumation = sumation+mult*item['amount']
    if sumation < minVal:
        minVal = sumation

# print(*filteredArr,sep='\n')
print(abs(minVal))
