
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

    # print(is_good_bad('YOUUUUU?___?'))
    # return
    slist = []
    for word in desc.split():
        sw = is_good_bad(word)
        if len(sw)>0:
            slist.append(sw)

    result = {}
    for word in slist:
        result[word] = (0 if result.get(word)==None else result[word])+1

    sortedResult = {}
    for word in sorted(slist):
        sortedResult[word]=result.get(word)

    # return sortedResult
    return result
    # print(result)
    # print(sortedResult)

# words_check("""hEllO My FriEnDs!!! 
# thIS is A tEsT For your #p#r#o#b#l#e#m a""")

# {'A': 2, 'For': 1, 'Friends': 1, 'Hello': 1, 'Is': 1, 'My': 1, 'Test': 1, 'This': 1, 'Your': 1}

# words_check("""HeLLLO_O My________________FRIEND HOW ARE YOUUUUU?___? I Don'T KNow Y_O_U_R_N_A_M_E yet !!!!!!!!""")

# {'Hellloo': 1, 'How': 1, 'Are': 1, 'Youuuuu': 1, 'I': 1, 'Dont': 1, 'Know': 1,'Yourname': 1, 'Yet': 1}