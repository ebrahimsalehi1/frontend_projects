
n = int(input(''))

stars = ""
j1 = j2 = n//2
j3 = j4 = n+n//2

for i in range(n):
    for j in range(2*n):
        if (j1<=j and j<=j2) or (j3<=j and j<=j4): 
            stars =stars+"*"
        else:
            stars = stars+" "    

    if i!=n-1:
        stars = stars+"\n"

    if i>=n//2:
        j1=j1+1
        j2=j2-1    
        j3=j3+1
        j4=j4-1   
    else:
        j1=j1-1
        j2=j2+1
        j3=j3-1
        j4=j4+1   

# stars=stars[0:len(stars)-1]
print(stars)
# print("{}{}".format(stars,stars))
