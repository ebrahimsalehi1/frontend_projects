
line1 = input('').strip('').split(' ')
line2 = input('').strip('').split(' ')

x = int(line1[0])
y = int(line1[1])

x1 = int(line2[0])
y1 = int(line2[1])

if x1>x:
    print('Right')
elif x1<x:
    print('Left')
