
def menor_nome(nomes):
    menor = ''
    tamanho = 9999
    for nome in nomes:
        nome = nome.strip()
        if len(nome) < tamanho:
            tamanho = len(nome)
            menor = nome
    return menor.capitalize()
