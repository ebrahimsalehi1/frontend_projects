
line1 = map(lambda x:int(x),input('').strip().split(' '))
n , l = line1[0] , line1[1]

line2 = map(lambda x:int(x),input('').strip().split(' '))
line3 = map(lambda x:int(x),input('').strip().split(' '))

print(*line1,sep=' ')
print(*line2,sep=' ')
print(*line3,sep=' ')
