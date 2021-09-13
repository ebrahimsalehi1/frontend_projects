
n1 = int(input(''))
days1 = list(map(lambda x:x,input('').strip().split(' ')))

n2 = int(input(''))
days2 = list(map(lambda x:x,input('').strip().split(' ')))

n3 = int(input(''))
days3 = list(map(lambda x:x,input('').strip().split(' ')))

allDays = {
    'shanbe':0,
    '1shanbe':0,
    '2shanbe':0,
    '3shanbe':0,
    '4shanbe':0,
    '5shanbe':0,
    'jome':0
    }

for day in days1:
    allDays[day] = allDays[day]+1

for day in days2:
    allDays[day] = allDays[day]+1

for day in days3:
    allDays[day] = allDays[day]+1

count = 0
for day in allDays:
    if allDays[day]==0:
        count = count+1        

print(count)
