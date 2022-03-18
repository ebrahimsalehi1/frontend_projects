
line = input().split()

n=int(line[0])
t=line[1]

results=[]

for i in range(n):
    s=input('')
    if sorted(list("".join(set(s))))==sorted(list("".join(set(t)))):
        results.append('Yes')
    else:
        results.append('No')    

print(*results,sep='\n')
