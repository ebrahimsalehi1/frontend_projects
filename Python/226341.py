def longest_path_length(n, degrees):
    # The longest path in a tree is the diameter of the tree
    # The diameter of a tree is the longest path between any two nodes
    # The longest path in a tree with given degrees is the sum of degrees minus the number of nodes

    return sum(degrees) - n + 1

# Read input
n = int(input().strip())
degrees = list(map(int, input().strip().split()))

# Print the length of the longest path
print(longest_path_length(n, degrees))