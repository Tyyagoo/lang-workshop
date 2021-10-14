
def bubble_sort(lista):
    end = len(lista) - 1
    for i in range(end, -1, -1):
        swapped = False
        for j in range(0, i):
            if lista[j] > lista[j + 1]:
                swapped = True
                lista[j + 1], lista[j] = lista[j], lista[j + 1]
                print(lista)
        if not swapped:
            break

    return lista