n = int(input("Digite um número inteiro: "))
summ = 0

while n > 0:
    summ += n % 10
    n = n // 10

print(summ)
