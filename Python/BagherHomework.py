
list = list(map(lambda x:int(x),input('').strip().split(' ')));
sumOfAngles = 0
for angle in list:
    sumOfAngles=sumOfAngles+(angle if angle>0 else -1)
    
if sumOfAngles==180:
    print('Yes')
else:
    print('No')
