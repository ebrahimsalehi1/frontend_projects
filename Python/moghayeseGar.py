
def compare(string1, string2):
    i=0
    
    while len(string1)>0 and len(string2)>0:
        if string1[i]>string2[i]:
            string2=string2[i+1:]
        elif string1[i]<string2[i]:
            string1=string1[i+1:]
        else:
            string1=string1[i+1:]
            string2=string2[i+1:]

        string1=string1[::-1]   
        string2=string2[::-1]    

    
    string1=string1[::-1]   
    string2=string2[::-1]    
    return string1 if len(string1)>0 else 'Both strings are empty!' if len(string2)==0 else string2


# output = compare('ali', 'salib') # 'las'
# output = compare('amin', 'nima') # 'Both strings are empty!'

# print(output)