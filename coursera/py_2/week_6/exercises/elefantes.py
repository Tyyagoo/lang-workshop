def incomodam(n):
    if n < 1:
        return ''
    if n == 1:
        return 'incomodam'
    return 'incomodam ' + incomodam(n - 1)

def elefantes(n):
    if n <= 1:
        return ''
    if n == 2:
        return 'Um elefante incomoda muita gente\n' + f'{n} elefantes {incomodam(n)} muito mais\n'
    return elefantes(n - 1) + f'{n - 1} elefantes incomodam muita gente\n' + f'{n} elefantes {incomodam(n)} muito mais\n'
