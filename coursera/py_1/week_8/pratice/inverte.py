
lista = []
n = 1
while n != 0:
    n = int(input("Digite um número: "))
    if n != 0:
        lista.append(n)

for x in range(len(lista) - 1, -1, -1):
    print(lista[x])
