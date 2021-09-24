import math

def sieve(k):
    def sieve_step(arr, a):
        for n in arr:
            if not n["tag"] and (n["value"] >= math.pow(a, 2)) and (n["value"] % a == 0):
                 n["tag"] = True

    def loop(i, arr):
        p = arr[i]
        if math.pow(p["value"], 2) > k:
            return arr
        else:
            if not p["tag"]:
                sieve_step(arr, p["value"])
            return loop(i + 1, arr)
    
    numbers = [{"value": x, "tag": False} for x in range(2, k + 1)]
    loop(0, numbers)
    return [x["value"] for x in numbers if not x["tag"]]
    
    
def maior_primo(n):
    primes = sieve(n)
    return primes.pop()
