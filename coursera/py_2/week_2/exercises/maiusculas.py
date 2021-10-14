
def maiusculas(frase):
    saida = ''
    for letter in frase:
        ascii = ord(letter)
        if ascii >= 65 and ascii <= 90:
            saida += letter
    return saida
