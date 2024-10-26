x = int(input("Enter x: "))

odd_numbers = []
number = 1

while len(odd_numbers) < x:
    if number % 2 !=0 :
        odd_numbers.append(number)
    number+=1


for i in range(x):
    print(" ".join(map(str, odd_numbers[:i + 1])))
