
line1 = input('').strip().split(' ');
m=int(line1[0])
n=int(line1[0])

countAll = 0
for i in range(m):
    line=input('');
    countAll = countAll+line.count('*')
    
print(countAll)   
 