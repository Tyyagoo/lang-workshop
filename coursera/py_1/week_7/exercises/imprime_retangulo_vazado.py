n = int(input("digite a largura: "))
m = int(input("digite a altura: "))

for i in range(0, m):
    for j in range(0, n):
        if (j == 0 or j == n -1) or (i == 0 or i == m - 1):
            print("#", end="")
        else:
            print(" ", end="")
    print()