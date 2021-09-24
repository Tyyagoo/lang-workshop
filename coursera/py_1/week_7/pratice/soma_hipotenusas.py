
def soma_hipotenusas(k):
    s = 0
    for n in range(1, k + 1):
        a = b = 1
        h = False
        while a < n and not h:
            b = a
            # incrementa cateto b ate a soma dos catetos² >= hipotenusa
            while n ** 2 > a ** 2 + b ** 2:
                b += 1

            h = n ** 2 == a ** 2 + b ** 2
            a += 1

        if h:
            s += n

    return s
