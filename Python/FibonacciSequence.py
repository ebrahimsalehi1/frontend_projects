
def ShowFibNth(pn,pnPlus1):       

    if pn==0 and pnPlus1==1:
        return 1
    else:
        print(pn)
        return ShowFibNth(pnPlus1-pn,pn)


n = int(input(''))
nPlus1 = int(input(''))

ShowFibNth(n,nPlus1)        
