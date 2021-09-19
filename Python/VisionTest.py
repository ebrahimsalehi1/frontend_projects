
n = int(input(''))
mainStr = input('')
artStudentStr = input('')

numberOfFailure = 0
for index in range(len(mainStr)):
    if mainStr[index]!=artStudentStr[index]:
        numberOfFailure = numberOfFailure+1

print(numberOfFailure)
