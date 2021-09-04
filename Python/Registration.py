
def check_registration_rules(**userpassList):
    list = []
    for user in userpassList:
        list.append(user)
        if user in ('quera','codecup'):
            list.remove(user)
        elif len(user)<4:
            list.remove(user)            
        elif len(userpassList[user])<6:
            list.remove(user)
        elif userpassList[user].isdigit():
            list.remove(user)

    return list

output = check_registration_rules(username='password', sadegh='He3@lsa', quera='kLS45@l$')

# output = check_registration_rules(saeed='1234567', ab='afj$L12')

print(output)
