
s = input('')
strList = list(s)

print(s)
for i in range(1,len(strList)):
    for j in range(i,-1,-1):
        strList[j]=strList[i]
    print(''.join(strList))


