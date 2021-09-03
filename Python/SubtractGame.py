
def game(number):
    left = number // 10
    right = number % 10
    if left<right:
        result = right-left
    else:
        result = left-right    

    return result

