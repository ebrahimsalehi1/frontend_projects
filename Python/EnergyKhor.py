def read_line():
    line = list(map(lambda x:int(x),input('').split(' ')))
    # print(line)
    return (line[0],line[1])

n,k=read_line()
s=k
remain=[]
for i in range(n):
    b,a=read_line()
    remain.append((b,a))


for r in sorted(remain,key=lambda tup:tup[0]):
    if s>=r[0]:
        s=s+r[1]-r[0]       


print(s)    