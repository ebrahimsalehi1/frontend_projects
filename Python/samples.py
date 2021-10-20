class Human:
    def __init__(self,name):
        self.name=name

    def __str__(self):
        return self.name

    def process(self):
        counter = 1
        while counter<10:
            counter=counter+1
        print(counter)

# class Employee(Human):
#     @property
#     employeeId

#     def __init__(self,employeeId):
#         pass            

def fun1(x='python'):
    print(x)

def calc(a,b=4):
    return a+b    

print(calc(20+5))

