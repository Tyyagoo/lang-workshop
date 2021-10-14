def imprime_matriz(matriz):
    x = len(matriz)
    y = len(matriz[0])
    for i in range(0, x):
        for j in range(0, y):
            print(matriz[i][j], end="")
            if (j + 1) < y:
                print(" ", end="")
        print()
