
a = int(input(''))
b = int(input(''))

if a==b:
    print("{} = {}".format(a,b))
else:    
    print("{} {} {}".format(max(a,b),'<',min(a,b)))

