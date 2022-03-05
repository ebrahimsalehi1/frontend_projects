# (Math.floor(Math.random(10)*10)%5==0 ? 'R':'G')+
# (Math.floor(Math.random(10)*10)%5==1 ? 'G' :'Y')+ 
# (Math.floor(Math.random(10)*10)%5==2 ? 'Y':'R')+
# (Math.floor(Math.random(10)*10)%5==3 ? 'R':'G')+
# (Math.floor(Math.random(10)*10)%3==4 ? 'G':'R')

diet = input('')

charCount = {'Y':0,'R':0,'G':0}
for ch in diet:
    charCount[ch]=(0 if charCount.get(ch)==None else charCount[ch])+1

if (charCount['R']>=3) or \
   (charCount['R']>=2 and charCount['Y']>=2) or \
   (charCount['R']+charCount['Y']==len(diet)):    
    print('nakhor lite')
else:
    print('rahat baash')
