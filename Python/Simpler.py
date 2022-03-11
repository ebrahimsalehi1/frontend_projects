
# multi input in one line 
# nums = []
# for i in range(1 , 5):
#     try:
#         number = float(input(""))
#         if number < abs(1000):
#             nums.append(number)
#         else :
#             print("Somthing")
#     except ValueError:
#         print("Enter number")

nums = [float(input("")),float(input("")),float(input("")),float(input(""))]

#   product of lists

get_product = 1

for i in nums:
    get_product *= i 

# calculate  
# get_sum = sum(nums)
# get_avg = sum(nums) / len(nums)
# get_max = max(nums) 
# get_min = min(nums)

  # Show 
print(f"""Sum : {sum(nums):6f}
Average : {sum(nums) / len(nums):6f}
Product : {get_product:6f}
MAX : {max(nums):6f}
MIN : {min(nums):6f}""")
