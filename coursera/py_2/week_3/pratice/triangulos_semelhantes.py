class Triangulo:
    def __init__(self, x, y, z):
        self.a = x
        self.b = y
        self.c = z

    def perimetro(self):
        return self.a + self.b + self.c

    def tipo_lado(self):
        x, y, z = self.a, self.b, self.c
        if x == y and x == z:
            return 'equilátero'
        elif x != y and x != z:
            return 'escaleno'
        return 'isósceles'

    def retangulo(self):
        a, b, c = self.a, self.b, self.c
        if c ** 2 == a ** 2 + b ** 2:
            return True
        if b ** 2 == a ** 2 + c ** 2:
            return True
        if a ** 2 == b ** 2 + c ** 2:
            return True
        return False

    def semelhantes(self, t):
        lados = sorted([self.a, self.b, self.c])
        outro = sorted([t.a, t.b, t.c])
        razoes = [lados[i] / outro[i] for i in range(0, 3)]
        return razoes[0] == razoes[1] and razoes[0] == razoes[2]

if __name__ == "__main__":
    t1 = Triangulo(2, 3, 5)
    t2 = Triangulo(4, 7, 10)
    print(t1.semelhantes(t2))
