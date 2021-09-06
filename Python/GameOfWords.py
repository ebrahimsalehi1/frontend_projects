
def words_check(desc):

    def is_good_bad(s):
        sout = ""
        for c in s:
            if c.isalpha():
                sout = sout+c

        if len(sout) > len(s)//2:
            sout = sout[0].upper()+sout[1:].lower()
        else:
            sout=""
        
        return sout

    slist = []
    for word in desc.split(' '):
        sw = is_good_bad(word)
        if len(sw)>0:
            slist.append(sw)

    result = {}
    for word in slist:
        result[word] = (0 if result.get(word)==None else result[word])+1

    return result
    # print(' '.join(slist))
    # print(result)

# words_check("""hEllO My FriEnDs!!! 
# thIS is A tEsT For your #p#r#o#b#l#e#m a""")

# {'A': 2, 'For': 1, 'Friends': 1, 'Hello': 1, 'Is': 1, 'My': 1, 'Test': 1, 'This': 1, 'Your': 1}
