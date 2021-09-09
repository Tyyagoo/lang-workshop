/* 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.

The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

let sum_if = (n, sum, condition) => condition(n) ? n + sum : sum
let checkIsMultiplier = n => mod(n, 3) == 0 || mod(n, 5) == 0

let sumTo = limit => {
  let rec loop = (n, sum) => n == 0 ? sum : loop(n - 1, sum_if(n, sum, checkIsMultiplier))
  loop(limit - 1, 0)
}

Js.log(sumTo(10))
Js.log(sumTo(1000))
