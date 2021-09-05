
n=1
list = []
while True:
    n=int(input(''))
    if n==0:
        break
    list.append(n)

# print(list[::-1],sep='\n')

for val in list[::-1]:
    print(val)
