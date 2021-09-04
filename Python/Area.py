
PI = 3.14

def get_func(list):
    listFunc = []
    for shape in list:
        print(shape)
        if shape=='square':
            func = lambda x : x*x
        elif shape=='circle':
            func = lambda r : PI*r*r
        elif shape=='rectangle':
            func = lambda x,y : x*y
        elif shape=='triangle':
            func = lambda h,r : h*r/2

        listFunc.append(func)
        return listFunc

ls = get_func(['square', 'circle', 'rectangle', 'triangle'])

print(ls,sep='\n')

# print(ls[0](1))
# print(ls[1](2))
# print(ls[2](2, 4))
# print(ls[3](4, 5))
