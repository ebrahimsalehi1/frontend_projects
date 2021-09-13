
n = int(input(''))

lines = []
lines = [
    '########.......########', # 0
    '#ghorfe1.......ghorfe2#',
    '########.......########', # 2
    '#ghorfe3.......ghorfe4#',
    '########.......########', # 4
    '#ghorfe5.......ghorfe6#',
    '########.......########', # 6
    '#ghorfe7.......ghorfe8#',
    '#######################' # 8    
    ]

AllInOne = '\n'.join(lines)

linesArray = []
for i in range(n+1,9):
    AllInOne = AllInOne.replace('ghorfe'+str(i),'.......')
 

print(AllInOne)


