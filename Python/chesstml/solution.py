import os

def process(name):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    os.chdir(dir_path)
    f = open(name)
    num_count = 0
    for line in f.readlines():        
        num_count = num_count+line.count("<a href")

    return num_count

# num_count = process("htmlsampletest2.html")
# num_count = process("/chesstml/a.txt")

# print(num_count)
# os.chdir('Python/chesstml') 
# print(os.getcwd())
# os.getcwd()
# dir_path = os.path.dirname(os.path.realpath(__file__))
# print(dir_path)
