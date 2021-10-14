
def insertion_sort(lista):
    for i in range(1, len(lista)):
        if lista[i] < lista[i - 1]:
            lista[i], lista[i - 1] = lista[i - 1], lista[i]
            for j in range(i, 0, -1):
                if lista[j] < lista[j - 1]:
                    lista[j], lista[j - 1] = lista[j - 1], lista[j]
    return lista

