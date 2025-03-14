def snake_moves(moves):
    # Initialize the snake's position
    row, col = 1, 0
    grid = [[0] * 8 for _ in range(2)]
    grid[row][col] = 1

    for move in moves:
        if move == 'F':
            col += 1
        elif move == 'L':
            row -= 1
            col += 1
        elif move == 'R':
            row += 1
            col += 1

        # Check if the snake hits the wall
        if row < 0 or row > 1 or col < 0 or col > 7:
            return "DEATH"

        grid[row][col] = 1

    # Convert grid to the required output format
    result = ["".join(map(str, grid[0])), "".join(map(str, grid[1]))]
    return "\n".join(result)

# Read input
moves = input().strip()

# Print the result
print(snake_moves(moves))