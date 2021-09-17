
n = int(input(''))       


count=1
arr = []

def add_to_array(new_item):
    flag_same = False
    for item in arr:
        if item==new_item: 
            flag_same = True

    if flag_same==False:
            arr.append(new_item)  


x=y=n//3
z=n-x-y

add_to_array({x,y,z})

for i in range(n):
    x=x-1
    y=y-1
    z=z+2
    if x==0 or y==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})


x=y=n//3
z=n-x-y
for i in range(n):
    x=x-1
    y=y+2
    z=z-1
    if x==0 or z==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})


x=y=n//3
z=n-x-y
for i in range(n):
    x=x-2
    y=y+1
    z=z+1
    if x==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})


x=y=n//3
z=n-x-y
for i in range(n):
    x=x+2
    y=y-1
    z=z-1
    if y==0 or z==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})


x=y=n//3
z=n-x-y
for i in range(n):
    x=x+1
    y=y-2
    z=z+1
    if y==0 :
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})

x=y=n//3
z=n-x-y
for i in range(n):
    x=x+1
    y=y+1
    z=z-2
    if z==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})

x=y=n//3
z=n-x-y
for i in range(n):
    x=x+1
    y=y
    z=z-1
    if z==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})

x=y=n//3
z=n-x-y
for i in range(n):
    x=x-1
    y=y
    z=z+1
    if x==0:
        break
    if (x+y+z==n and x+y>z and x+z>y and y+z>x):               
        add_to_array({x,y,z})

print(len(arr))
print(*arr,sep=' ')

# count = 0
# arr = []
# for i in range(1,n+1):
#     for j in range(1,n+1):
#         for k in range(1,n+1):
#             if (i+j+k==n and i+j>k and i+k>j and j+k>i):               

#                 flag_same = False
#                 for item in arr:
#                     if item=={i,j,k}: 
#                         flag_same = True

#                 if flag_same==False:
#                      arr.append({i,j,k})                        

# print(len(arr))

# print(*arr,sep=' ')
