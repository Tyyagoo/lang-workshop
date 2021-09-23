n = int(input("Digite um número inteiro: "))
divisor = n - 1
isPrime = True

while divisor > 1:
    if n % divisor == 0:
        isPrime = False
    divisor -= 1

if isPrime:
    print("primo")
else:
    print("não primo")
        
