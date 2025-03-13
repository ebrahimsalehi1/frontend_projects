def max_expression_value(expression):
    a, b, c = map(int, expression.split('?'))
    
    # Calculate all possible values
    result1 = a * b * c
    result2 = a * (b + c)
    result3 = (a + b) * c
    result4 = a + b + c
    
    # Return the maximum value
    return max(result1, result2, result3, result4)

# Read input
expression = input().strip()

# Print the maximum value
print(max_expression_value(expression))