class ExceptionProxy(Exception):
    # define your class here
    def __init__(self,message):
        print('msg:',message)

def transform_exceptions(func_ls):
    # implement your function here

    list = []

    for func in func_ls:
        try:
            func()
            list.append({'msg':'ok!','function':func})
        except Exception as ex:
            list.append({'msg':ex.args[0],'function':func})
            print('err')
    
    return list

def f():
    # print('f')
    1/0

def g():
    # print('g')
    pass

tr_ls = transform_exceptions([f, g])

for tr in tr_ls:
    print("msg: " + tr.msg + "\nfunction name: " + tr.function.__name__)
