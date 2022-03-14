
line = list(map(lambda x:int(x),input().split()))
m=line[0]
n=line[1]
mat=[[0 for i in range(n)] for j in range(m)]

k=int(input(''))

for i in range(k):
    line = list(map(lambda x:int(x),input().split()))
    mat[int(line[0])-1][int(line[1])-1] = '*'

def check(i,j):
    count = 0
    if i-1>=0 and i-1<m and j-1>=0 and j-1<n :
        count=count+(mat[i-1][j-1]=='*')

    if i-1>=0 and i-1<m :
        count=count+(mat[i-1][j]=='*')

    if i-1>=0 and i-1<m and j+1>=0 and j+1<n :
        count=count+(mat[i-1][j+1]=='*')

    if j-1>=0 and j-1<n :
        count=count+(mat[i][j-1]=='*')

    if j+1>=0 and j+1<n :
        count=count+(mat[i][j+1]=='*')

    if i+1>=0 and i+1<m and j-1>=0 and j-1<n :
        count=count+(mat[i+1][j-1]=='*')

    if i+1>=0 and i+1<m :
        count=count+(mat[i+1][j]=='*')

    if i+1>=0 and i+1<m and j+1>=0 and j+1<n :
        count=count+(mat[i+1][j+1]=='*')

    return count

for i in range(m):
    for j in range(n):
        if mat[i][j]==0:
            mat[i][j] = check(i,j)

s=""
for i in range(m):
    for j in range(n):
        s=s+str(mat[i][j])+" "
    s=s+'\n'

print(s)    
