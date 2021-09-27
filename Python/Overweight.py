
n = int(input(''))
m = float(input(''))

bmi = round(n/(m*m),2)
res = ''
if bmi < 18.5:
    res='Underweight'
elif 18.5 <= bmi and bmi < 25: 
    res = 'Normal'
elif 25 <= bmi and bmi < 30: 
    res = 'Overweight'
elif 30<=bmi: 
    res='Obese'

print("%.2f" % bmi)
print(res)