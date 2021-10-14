def soma_lista(lista):
    if len(lista) == 0:
        return 0
    if len(lista) == 1:
        return lista[0]
    mid = len(lista) // 2
    left_sum = soma_lista(lista[:mid])
    right_sum = soma_lista(lista[mid:])
    return left_sum + right_sum
