
def ordena(lista):
    start = 0
    leng = len(lista)

    for i in range(0, leng):
        lowest = 1000000000
        index = 0
        j = 0
        for j in range(start, leng):
            if lista[j] < lowest:
                lowest = lista[j]
                index = j
        lista[index], lista[i] = lista[i], lowest
        start += 1
    return lista
