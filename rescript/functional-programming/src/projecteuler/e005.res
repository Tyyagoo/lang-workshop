/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

open Belt

let fn = (lower, upper) => {
  let rec loop = n => {
    let length = upper - lower + 1
    let mods = Array.makeBy(length, i => mod(n, i + 1) == 0)
    // Js.log(`${string_of_int(n)} -> ${mods->Array.reduce("", (a, i) => (i ? "T" : "F") ++ a)}`)
    let hasSomeFalse = mods->Array.some(e => !e)
    hasSomeFalse ? loop(n + 1) : n
  }

  loop(20)
}
Js.log(fn(1, 20))
