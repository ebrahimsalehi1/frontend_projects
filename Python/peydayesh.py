
def find(num1, num2, num3):
    foundNum = 0
    arr = [num1,num2,num3]
    if 1 not in arr:
        foundNum = 1

    if 2 not in arr:
        foundNum = 2

    if 3 not in arr:
        foundNum = 3

    if 4 not in arr:
        foundNum = 4   

    return foundNum

# print( find(1, 2, 3))
# print( find(1, 4, 3))