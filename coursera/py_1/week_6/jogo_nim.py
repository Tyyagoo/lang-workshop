

def imprime_estado(n):
    if n == 0:
        print(f"Fim do jogo!", end="")
    elif n == 1:
        print("Agora resta apenas uma peça no tabuleiro.\n")
    else:
        print(f"Agora restam {n} peças no tabuleiro.\n")


def computador_escolhe_jogada(n, m):
    q = 1
    while q != m:
        if (n - q) % (m + 1) == 0:
            break;
        else:
            q += 1

    if q == 1:
        print(f"O computador tirou uma peça.")
    else:
        print(f"O computador tirou {q} peças.")

    return q


def usuario_escolhe_jogada(n, m):
    q = int(input("Quantas peças você vai tirar? "))
    while (q > m or q > n or q < 1):
        print("\nOops! Jogada inválida! Tente de novo.\n")
        q = int(input("Quantas peças você vai tirar? "))
    
    if q == 1:
        print(f"Voce tirou uma peça.")
    else:
        print(f"Voce tirou {q} peças.")
    
    return q
    

def partida():
    n = int(input("Quantas peças? "))
    m = int(input("Limite de peças por jogada? "))
    usuarioVez = False
    if n % (m + 1) == 0:
        print("\nVocê começa!\n")
        usuarioVez = True
    else:
        print("\nComputador começa!\n")

    while n > 0:
        if usuarioVez:
            q = usuario_escolhe_jogada(n, m)
            n -= q
            imprime_estado(n)
            usuarioVez = False
        else:
            q = computador_escolhe_jogada(n, m)
            n -= q
            imprime_estado(n)
            usuarioVez = True
    
    print(" O computador ganhou!")

def campeonato():
    
    for rn in range(1, 4):
        print(f"\n**** Rodada {rn} ****\n")
        partida()
    print("\n**** Final do campeonato! ****\n")
    print("Placar: Você 0 X 3 Computador")

def main():
    print("\nBem-vindo ao jogo do NIM! Escolha:\n")

    print("1 - para jogar uma partida isolada")
    print("2 - para jogar um campeonato")

    escolha = int(input("> "))

    if escolha == 1:
        print("\nVoce escolheu uma partida unica.\n")
        partida()
    elif escolha == 2:
        print("\nVoce escolheu um campeonato!")
        campeonato()

main()