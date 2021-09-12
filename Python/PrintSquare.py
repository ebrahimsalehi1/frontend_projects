
n = int(input(''))

for i in range(n):
    for j in range(n):
        if j==0 or j==n-1:
            print('*',sep='')
        else:
            print('',sep='')    
    
    print('')