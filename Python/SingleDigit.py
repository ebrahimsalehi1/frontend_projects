
n = input('')

list1=list(map(lambda x:int(x),list(n)))
while(sum(list1)>=10):
    list1=list(map(lambda x:int(x),list(str(sum(list1)))))

print(sum(list1))

