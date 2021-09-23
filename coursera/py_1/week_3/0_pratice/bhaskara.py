from math import *

a = int(input(""))
b = int(input(""))
c = int(input(""))

delta = (b ** 2) - (4 * a * c)

if delta < 0:
    print("esta equação não possui raízes reais")
elif delta == 0:
    x = -b / (2 * a)
    print(f"a raiz desta equação é {x}")
else:
    a2 = 2 * a
    x1 = (-b + sqrt(delta)) / a2
    x2 = (-b - sqrt(delta)) / a2

    if x1 == x2:
        print(f"a raiz dupla desta equação é {x1}")
    else:
        if x1 > x2:
            print(f"as raízes da equação são {x2} e {x1}")
        else:
            print(f"as raízes da equação são {x1} e {x2}")
        
