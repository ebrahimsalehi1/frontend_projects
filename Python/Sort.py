
n = int(input(''))

arr = []
for i in range(n):
    arr.append(int(input('')))

average = sum(arr)//n

times =0
for val in arr:
    times = times + ((val-average) if (val-average)>0 else 0)


print(times)
