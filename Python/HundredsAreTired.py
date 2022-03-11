
a = str(input(''))
b = str(input(''))

# if a==b:
#     print("{} = {}".format(a,b))
# else:    
#     print("{} {} {}".format(max(a,b),'<',min(a,b)))

a1=list(a)
a1.reverse()

b1=list(b)
b1.reverse()

a2=int(''.join(a1))
b2=int(''.join(b1))

# print(a2,b2)

if a2<b2:
    print("{} < {}".format(a,b))

if b2<a2:
    print("{} < {}".format(b,a))

if a2==b2:
    print("{} = {}".format(a,b))
  