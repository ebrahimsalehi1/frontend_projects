import unittest
from solution import transform_exceptions,ExceptionProxy

class Test(unittest.TestCase):
    def test_1(self):
        def f():
            1/0

        def g():
            try:
                raise ValueError('Represents a hidden bug, do not catch this')
                raise Exception('This is the exception you expect to handle')
            except ExceptionProxy as error:
                print('Caught this error: ' + repr(error))

            

        tr_ls = transform_exceptions([f, g])

        generated=''   
        for tr in tr_ls:
            generated=generated+"msg: " + tr.msg + "\nfunction name: " + tr.function.__name__+"\n"

        print(generated)
        

t = Test()
t.test_1()
