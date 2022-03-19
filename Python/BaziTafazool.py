
def game(number):
    m = number % 10
    n = int(number / 10)
    return abs(m-n)


print(game(81))
