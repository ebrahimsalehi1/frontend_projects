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

