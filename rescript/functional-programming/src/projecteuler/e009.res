type triplet = {
  a: int,
  b: int,
  c: int,
}

let intPow2 = a => a * a
let isTriplet = ({a, b, c}) => a->intPow2 + b->intPow2 == c->intPow2
let isNatural = ({a, b, c}) => a > 0 && b > 0 && c > 0
let isDesiredTriplet = ({a, b, c}) => a + b + c == 1000

let checkTriplet = v => isTriplet(v) && isNatural(v) && isDesiredTriplet(v)

let produceTriplets = (limit, sum) => {
  let sumBy2 = sum / 2
  let rec loop = (i) => {
      i == limit ? 
       {a: -1, b: -1, c: -1} : 
       (sum*(sumBy2-i))->mod(sum-i) == 0 ? 
        {a: i, b: sum*(sumBy2-i) / (sum-i), c: sum - ((sum*(sumBy2-i) / (sum-i)) + i)} : 
        loop(i + 1)
  }

  loop(1)
}

let multiplyTriplet = ({a, b, c}) => a->Js.Int.toFloat *. b->Js.Int.toFloat *. c->Js.Int.toFloat

let t = produceTriplets(500, 1000)
Js.log(t)
let product = t->multiplyTriplet
Js.log(product)
