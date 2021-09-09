/* 

Each new term in the Fibonacci sequence is generated by adding the previous two terms. 

By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 

find the sum of the even-valued terms.

*/
let threshold = 4_000_000
let sumIf = (n, sum, condition) => condition(n) ? n + sum : sum
let isEven = n => mod(n, 2) == 0

let fibonacci = limit => {
  let rec loop = (prev, curr, sum) =>
    curr > limit ? sum : loop(curr, prev + curr, sumIf(curr, sum, isEven))
  loop(0, 1, 0)
}

Js.log(fibonacci(threshold))