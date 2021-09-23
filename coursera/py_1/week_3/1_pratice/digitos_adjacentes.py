n = int(input("Digite um número inteiro: "))
lastDigit = n % 10
n = n // 10
adjacent = False

while n > 0:
    digit = n % 10
    if digit == lastDigit:
        adjacent = True
        break
    else:
        lastDigit = digit
    n = n // 10

if adjacent:
    print("sim")
else:
    print("não")
