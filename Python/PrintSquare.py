
n = int(input(''))

star=""
for i in range(n):
    for j in range(n):
        if i==0 or i==n-1:
            star = star+"*"            
        else:
            if j==0 or j==n-1:
                star = star+"*"
            else:
                star = star+" "

    star = star+"\n"    
    

print(star)
