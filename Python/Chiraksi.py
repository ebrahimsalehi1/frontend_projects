class ExceptionProxy(Exception):
    # define your class here
    def __init__(self,msg,function=None):
        # print('msg:',message)
        self.msg=msg
        self.function=function

def transform_exceptions(func_ls):
    # implement your function here

    list = []

    for func in func_ls:
        try:
            func()
            list.append(ExceptionProxy(msg='ok!',function=func))
        except Exception as ex:
            list.append(ExceptionProxy(msg=ex.args[0],function=func))
    
    return list

def f():
    1/0

def g():
    pass

def h():
    raise ExceptionProxy('something goes wrong')

def i():
    return 10

tr_ls = transform_exceptions([])

for tr in tr_ls:
    print("msg: " + tr.msg + "\nfunction name: " + tr.function.__name__)
