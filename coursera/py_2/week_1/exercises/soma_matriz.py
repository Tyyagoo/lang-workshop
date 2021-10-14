def dimensoes(matriz):
    i = len(matriz)
    j = len(matriz[0])
    return i, j

def soma_matrizes(m1, m2):
    x = dimensoes(m1)
    if dimensoes(m1) != dimensoes(m2):
        return False

    matriz = []
    for i in range(0, x[0]):
        linha = []
        for j in range(0, x[1]):
            linha.append(m1[i][j] + m2[i][j])
        matriz.append(linha)
    return matriz