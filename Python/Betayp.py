def get_result(str):
    s=''
    for ch in str:
        if ch=='=':
            s=s[0:-1]
        else:
            s=s+ch

    return s

str=input('')
print(get_result(str))
