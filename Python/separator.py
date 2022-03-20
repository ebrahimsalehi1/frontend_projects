def separator(ls):
    return ( list(filter(lambda x:x%2==0,ls)), list(filter(lambda x:x%2==1,ls)))

# print(separator([1, 11, 5, 7, 3]))