

def maior_elemento(lista):
    maior = -9999999999
    for x in lista:
        if x > maior:
            maior = x
    
    return maior
