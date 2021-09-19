

n = int(input(''))

stars = ""
j1 = j2 = n

for i in range(2*n+1):
    for j in range(2*n+1):
        if (j1<=j and j<=j2) : 
            stars =stars+"*"
        else:
            stars = stars+" "    

    stars = stars+"\n"

    if i>=n:
        j1=j1+1
        j2=j2-1    
    else:
        j1=j1-1
        j2=j2+1

print(stars)
