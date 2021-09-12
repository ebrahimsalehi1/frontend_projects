
n = int(input(''))

sentence = input('')

list = sentence.split(' ')
reverseList = reversed(list)

# for word in reverseList:
#     print(word)

print(*reverseList,sep=' ')    