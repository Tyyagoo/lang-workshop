
def encontra_impares(lista):
    if len(lista) == 0:
        return []
    if len(lista) == 1:
        return [lista[0]] if lista[0] % 2 != 0 else []

    mid = len(lista) // 2
    left = encontra_impares(lista[:mid])
    right = encontra_impares(lista[mid:])
    return left + right
