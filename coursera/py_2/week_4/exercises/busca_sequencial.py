
def busca(lista, elemento):
    leng = len(lista)
    for i in range(0, leng):
        if lista[i] == elemento:
            return i
    return False
