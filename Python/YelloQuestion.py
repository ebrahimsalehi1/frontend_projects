# My Information
# ---------------------------------------
# import sys

# n = int(input(''))
# if not(n>=1 and n<=10):
#     sys.exit()

# s=''
# for i in range(n):
#     s+='o'
    
# print('W{}w!'.format(s))

# ---------------------------------------

import os 
os.system("cls")

try:
    number = int(input("please enter number of 'O' Charachter: "))
    if number <1 or number> 10:
        print("enter between 1 and 10")
    else:
        print('W' + (number * 'o')+'w!')

except ValueError :
    print("please enter just number ")