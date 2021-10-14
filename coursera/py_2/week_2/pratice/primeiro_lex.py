
def primeiro_lex(lista):
    primeiro = lista[0]
    for frase in lista:
        primeiro = frase if frase < primeiro else primeiro
    return primeiro

if __name__ == "__main__":
    print(primeiro_lex(['oĺá', 'A', 'a', 'casa']))
    print(primeiro_lex(['AAAAAA', 'b']))