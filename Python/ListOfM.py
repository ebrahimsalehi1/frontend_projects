def calculator(n, m, li):
    list = []
    val=0

    for i in range(0,n,m):
        val = sum(li[i:i+m])
        list.append(val)

    sumOfList=0
    index=0
    for value in list:
        index=index+1
        sumOfList = sumOfList+(-1 if index%2==0 else 1)*value

    return  sumOfList

# output=calculator(8, 3, [1, 2, 3, 4, 5, 6, 7, 8])  # 6

# output=calculator(8, 1, [1, 2, 3, 4, 5, 6, 7, 8]) # -4

# print(output)
