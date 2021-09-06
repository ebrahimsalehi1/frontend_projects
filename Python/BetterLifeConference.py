
inputs = list(map(lambda x : int(x),input('').strip().split(' ')))
r = inputs[0]
c = inputs[1]


sOut = ""
if c<=10:
    sOut = "Right "+str(10-r+1)+" "+str(c)
else:
    sOut = "Left "+str(10-r+1)+" "+str(20-c+1)

print(sOut)
