
res = [0,0,0,0,0]

flag = False
for i in range(5):
    s=input('')
    if s.find('FBI')!=-1:
        flag=True
        res[i]=i+1

if flag:
    print(*(filter(lambda x:x>0,res)),sep=' ') 
else:
    print('HE GOT AWAY!')           
