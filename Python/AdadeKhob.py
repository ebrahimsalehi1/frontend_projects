k=int(input(''))

def number_divide(n):
    count=0
    for i in range(1,int(n/2)+1):
        if n%i==0:
            count=count+1

    return count+1

# print(number_divide(6))

s=0
num=1
while number_divide(num)!=k:
    s=s+num
    num=num+1
    print(s)

print(s)