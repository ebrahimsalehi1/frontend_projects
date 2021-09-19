
n = int(input(''))

res_x = 0
res_y = 0

coefficient = 1

if n%2==0:
    for i in range(1,n//2+1):
        res_x = res_x+i*coefficient
        if n%2==0 and i<n//2:
            res_y = res_y+i*coefficient

        coefficient = coefficient*(-1)
else:
    for i in range(1,n//2+1):
        res_x = res_x+i*coefficient
        if not (n%2==0 and i<n//2):
            res_y = res_y+i*coefficient

        coefficient = coefficient*(-1)

print(res_x,res_y)
