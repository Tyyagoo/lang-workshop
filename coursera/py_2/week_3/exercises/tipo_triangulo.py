
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