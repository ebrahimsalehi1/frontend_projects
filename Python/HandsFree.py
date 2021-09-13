
line1 = input('').strip().split(' ')

line2 = input('').strip().split(' ')

left1 = line1[0]
right1 = line1[1]

left2 = line2[0]
right2 = line2[1]

if left1==right1 or left2==right2:
    print('YES')
elif left1==right2 or left2==right1:
    print('YES')    
else:
    print('NO')    

