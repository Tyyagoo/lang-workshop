
vogais = list('aeiou')

def conta_letras(frase, contar="vogais"):
    frase = frase.lower()
    contagem = 0
    if contar == "vogais":
        for letra in frase:
            if letra in vogais:
                contagem += 1
    elif contar == "consoantes":
            for letra in frase:
                if letra not in vogais and letra != ' ':
                    contagem += 1
    else:
        pass
    return contagem

if __name__ == "__main__":
    print(conta_letras('programamos em python'))
    print(conta_letras('programamos em python', 'vogais'))
    print(conta_letras('programamos em python', 'consoantes'))