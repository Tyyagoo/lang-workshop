open Belt

let threshold = 2_000_000

type taggableNumber = {
  value: int,
  mutable tag: bool,
}

let intExp = (a, b) => (a->Int.toFloat ** b->Int.toFloat)->Float.toInt
let generateArray = n => Array.makeBy(n - 1, i => {value: i + 2, tag: false})
let makeStep = (arr, a) =>
  arr->Array.forEach(n =>
    n.tag ? () : n.value >= intExp(a, 2) && mod(n.value, a) == 0 ? n.tag = true : ()
  )

let tagNonPrimes = limit => {
  let rec loop = (i, array) => {
    let p = array->Array.getExn(i)
    Js.log(p)
    intExp(p.value, 2) > limit
      ? array
      : {
          if !p.tag {
            array->makeStep(p.value)
          }
          loop(i + 1, array)
        }
  }

  loop(0, generateArray(limit - 1))
}

let selectPrimes = (arr) => arr->Array.keepMap(v => v.tag ? None : Some(v.value))

let taggedNumbers = tagNonPrimes(threshold)
// must be Float to prevent integer overflow on reduce
let primes = taggedNumbers->selectPrimes->Array.map(n => n->Int.toFloat)
let sum = primes->Array.reduce(0., (a, b) => a +. b)
Js.log(sum)