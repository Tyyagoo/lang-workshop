/* 

The sum of the squares of the first ten natural numbers is, 385
The square of the sum of the first ten natural numbers is, 3025

Hence the difference between the sum of the squares of the first ten natural numbers and 
the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers 
and the square of the sum.

*/

open Belt

type mapIntToInt = array<int> => array<int>

let intExp = (a, b) => (a->Int.toFloat ** b->Int.toFloat)->Float.toInt
let makeNumbersArray = n => Array.makeBy(n, i => i + 1)
let squareNumbers = arr => arr->Array.map(n => intExp(n, 2))

let findDifference = n => {
  let numbers = makeNumbersArray(n)
  let sumOfSquare = numbers->squareNumbers->Array.reduce(0, (a, b) => a + b)
  let squareOfSum = numbers->Array.reduce(0, (a, b) => a + b)->intExp(2)
  abs(sumOfSquare - squareOfSum)
}

Js.log(findDifference(100))
