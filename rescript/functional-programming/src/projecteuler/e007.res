/* 

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

*/

open Belt

let threshold = 1_000_005

type taggableNumber = {
  value: int,
  mutable tag: bool, // MUTABLE IS GOOD!!!!!!!
}

let intExp = (a, b) => (a->Int.toFloat ** b->Int.toFloat)->Float.toInt
let generateArray = n => Array.makeBy(n - 1, i => {value: i + 2, tag: false})
let makeStep = (arr, a) =>
  arr->Array.forEach(n =>
    n.tag ? () : n.value >= intExp(a, 2) && mod(n.value, a) == 0 ? n.tag = true : ()
  )

let generatePrimes = (n, l) => {
  Js.log("Generating primes...")
  let rec loop = (arr, i) => {
    Js.log(` - ${i->Int.toString}th iteration`)
    i >= l ? arr : switch arr->Array.get(i) {
    | None => arr
    | Some(v) => {
        arr->makeStep(v.value)
        loop(arr, i + 1)
     }
    }
  }
  generateArray(n)->loop(0)->Array.keepMap(n => n.tag ? None : Some(n.value))
}

let findNthPrime = n => {
  let primes = generatePrimes(threshold, n + 1)
  Js.log(`Finding the ${n->Int.toString}th prime...`)
  switch primes->Array.get(n - 1) {
  | None => -1
  | Some(v) => v
  }
}

Js.log(findNthPrime(10_001))
