open Belt

type triangular_number = {
  number: int,
  divisors: array<int>,
  length: int,
}

let sumAllBelow = n => {
  let rec loop = (sum, n) => n == 0 ? sum : loop(sum + n, n - 1)
  loop(0, n)
}

let makeDivisorsArray = n => {
  let rec loop = (arr, n, div, count) => {
    div > n
      ? (arr, count)
      : {
          let m = mod(n, div)
          let a = m == 0 ? arr->Array.concat([div]) : arr
          let c = m == 0 ? count + 1 : count
          loop(a, n, div + 1, c)
        }
  }

  loop([], n, 1, 0)
}

let makeTriangularNumber = i => {
  let n = sumAllBelow(i + 1)
  let (divisors, count) = makeDivisorsArray(n)
  {
    number: n,
    divisors: divisors,
    length: count,
  }
}

let findTriangularWithDivisors = divisors_count => {
  let rec loop = n => {
    let number = makeTriangularNumber(n)
    Js.log(`${string_of_int(number.number)} -> ${string_of_int(number.length)}`)
    number.length > divisors_count ? number : loop(n + 1)
  }

  loop(12300)
}


let n = findTriangularWithDivisors(500)
Js.log("Number found!!!")
n->Js.log