timestamp = int(input("Por favor, entre com o número de segundos que deseja converter: "))
days = timestamp // 86400
timestamp = timestamp % 86400
hours = timestamp // 3600
timestamp %= 3600
minutes = timestamp // 60
timestamp %= 60
print(f"{days} dias, {hours} horas, {minutes} minutos e {timestamp} segundos.")
