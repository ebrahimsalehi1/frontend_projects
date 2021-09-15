
line = input('').strip()
n=int(line[0:line.index(" ",0)])
word=line[line.index(" ",0)+1:]

sout = ''
for i in range(n):
    sout=sout+"copy of "

sout=sout+word

print(sout)
