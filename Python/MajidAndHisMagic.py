import sys

n = int(input(''))

if not (n>=1 and n<=100):
    sys.exit()

list_output = [0 for i in range(n+1)]

list_input = map(lambda x:int(x),input('').strip().split(" ")) 
#list_input = list(map(int,input("").strip().split()))[:n]

for i in list_input:
    list_output[i] = list_output[i]+1;

index=0
min=101
min_index = 0
for val in list_output:
    if index==0:
        index = index+1
        continue

    if val<min and val>0:
        min_index=index
        min=val
    index = index+1


print(min_index)
