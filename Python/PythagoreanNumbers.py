
n1 = int(input(''))

n2 = int(input(''))

n3 = int(input(''))

listNums = [n1,n2,n3]
maxNumbers = max(listNums)

listNums.remove(maxNumbers)

s = 0
for num in listNums:
    s = s+num*num

if s == maxNumbers*maxNumbers:
    print('YES')
else:
    print('NO')

