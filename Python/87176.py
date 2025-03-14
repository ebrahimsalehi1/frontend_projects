def game(number):
    # Convert the number to a string to extract digits
    digits = [int(d) for d in str(number)]
    
    # Find the maximum and minimum digits
    max_digit = max(digits)
    min_digit = min(digits)
    
    # Return the difference between the maximum and minimum digits
    return max_digit - min_digit

# Test cases
# print(game(17))  # Output: 6
# print(game(66))  # Output: 0
# print(game(81))  # Output: 7