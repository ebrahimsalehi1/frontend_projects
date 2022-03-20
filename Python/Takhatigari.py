
print(' '.join(sorted(list(map(lambda x:x if (ord(x)-97)%2==0 else x.upper(),list(input('')))),reverse=True)))