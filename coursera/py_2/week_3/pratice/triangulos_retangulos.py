
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

if __name__ == "__main__":
    t = Triangulo(1, 3, 5)
    print(t.retangulo())
    # deve devolver False

    u = Triangulo(3, 4, 5)
    print(u.retangulo())
    # deve devolver True