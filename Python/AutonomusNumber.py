
n = input('')

listDigits = list(n)
if listDigits==listDigits[::-1]:
    print('YES')
else:
    print('NO')
    