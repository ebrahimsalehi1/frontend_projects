
line1 = input('').strip().split(' ')

KING = 1
VIZIER = 1
ROC = 2
ELEPHANT = 2
HORSE = 2
SOLDIER=8

king = int(line1[0])
vizier=int(line1[1]) 
roc=int(line1[2]) 
elephant=int(line1[3]) 
horse=int(line1[4]) 
soldier=int(line1[5]) 

print(
    KING-king,
    VIZIER-vizier,
    ROC-roc,
    ELEPHANT-elephant,
    HORSE-horse,
    SOLDIER-soldier
)
