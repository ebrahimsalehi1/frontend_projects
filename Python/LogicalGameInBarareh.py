mat=7*[7*[0]]
for i in range(7):
        line=list(str(input('')))
        mat[i]=line

# for i in range(7):
#     for j in range(7):
#         print(i,j,mat[i][j])

def check(x,y):
    count=0
    if x-2>=0 and x-2<=6 and mat[x-1][y]=='o' and mat[x-2][y]=='.':
        count=count+1
    if x+2>=0 and x+2<=6 and mat[x+1][y]=='o' and mat[x+2][y]=='.':
        count=count+1
    if y-2>=0 and y-2<=6 and mat[x][y-1]=='o' and mat[x][y-2]=='.':
        count=count+1
    if y+2>=0 and y+2<=6 and mat[x][y+1]=='o' and mat[x][y+2]=='.':
        count=count+1

    return count    

count_all=0
for i in range(7):
    for j in range(7):
        if mat[i][j]=='o':
            count_all=count_all+check(i,j)

print(count_all)
