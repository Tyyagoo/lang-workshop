from math import *

x1 = int(input(""))
y1 = int(input(""))
x2 = int(input(""))
y2 = int(input(""))

x_distance = abs(x1 - x2) ** 2
y_distance = abs(y1 - y2) ** 2
distance = sqrt(x_distance + y_distance)

if distance >= 10:
    print("longe")
else:
    print("perto")
