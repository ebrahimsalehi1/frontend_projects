n=int(input(''))

def get_result(n):
    if n%8==0:
        return '6'
    elif n%8==7:
        return 'p'    
    elif n%8==6:
        return 'u'    
    elif n%8==5:
        return 'c'    
    elif n%8==4:
        return 'e'    
    elif n%8==3:
        return 'd'    
    elif n%8==2:
        return 'o'    
    elif n%8==1:
        return 'c'                                                    

print(get_result(n))        
