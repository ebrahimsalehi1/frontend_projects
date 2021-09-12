

diet = input('')

charCount = {}
for ch in diet:
    charCount[ch]=(0 if charCount.get(ch)==None else charCount[ch])+1

if (charCount.get('R')!=None and charCount['R']>=3) or \
   (charCount.get('R')!=None and charCount['R']>=2 and \
     charCount.get('Y')!=None and charCount['Y']>=2) or \
   (charCount.get('G')==None and charCount.get('Y')==None and charCount.get('R')!=None and charCount['R']==len(diet)) or \
   (charCount.get('G')==None and charCount.get('R')==None and charCount.get('Y')!=None and charCount['Y']==len(diet)):
    print('nakhor lite')
else:
    print('rahat baash')
