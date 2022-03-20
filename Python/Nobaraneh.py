arr=list(map(lambda x:int(x),input('').split(' ')))
count = len(list(filter(lambda x:x>=80,arr)))
if count>=3:
    print('Mamma mia!')
elif count==1 or count==2:
    print('Mamma mia!!')
else:
    print('Mamma mia!!!')

