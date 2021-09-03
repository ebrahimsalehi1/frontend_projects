
def fruits(input_fruits):
    result = {}
    for fruit in input_fruits:
        if fruit['shape']=='sphere' and fruit['mass']>=300 and fruit['mass']<=600 and fruit['volume']>=100 and fruit['volume']<=500:
            result[fruit['name']]=(0 if result.get(fruit['name'])==None else result[fruit['name']])+1

    return result

# output = fruits ((
#     {'name':'apple', 'shape': 'sphere', 'mass': 350, 'volume': 120},
#     {'name':'mango', 'shape': 'square', 'mass': 150, 'volume': 120}, 
#     {'name':'lemon', 'shape': 'sphere', 'mass': 300, 'volume': 100},
#     {'name':'apple', 'shape': 'sphere', 'mass': 500, 'volume': 250}))

# print(output)
