

def ordenada(lista):
    last = -999999
    for num in lista:
        if num < last:
            return False
        last = num
    return True