
line1 = input('').strip().split(' ')

a = int(line1[0])
b = int(line1[1])
l = int(line1[2])

i = 0
s = 0
while True:
    s = s + (a if i%2==0 else b)
    i=i+1
    if i>=l:
        break

print(s)
