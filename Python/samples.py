
def apply(*nums,operator):
    result = 0

    if operator=="*":
        result=1
        for num in nums:
            result=result*num
    elif operator=="+":
        result = sum(nums)

    return result

print(apply(1,2,3,4,operator="*"))
