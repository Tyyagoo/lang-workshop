/* 

A palindromic number reads the same both ways. 

The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// 100 x 100 = 10_000
// 999 x 999 = 998_001

open Belt

let isPalindromic = n => {
  let normal = string_of_int(n)
  let reverse = normal->Js.String2.split("")->Array.reverse->Array.reduce("", (i, a) => i ++ a)
  String.equal(normal, reverse)
}

let largestPalindromic = () => {
  let start = 999
  let rec loop = (x, y) => {
    if x < 800 {
      ()
    } else if y < 800 {
      loop(x - 1, start)
    } else {
      let n = x * y
      if isPalindromic(n) {
        Js.log(`(${string_of_int(x)}, ${string_of_int(y)}) -> ${string_of_int(n)}`)
      }
      loop(x, y - 1)
    }
  }
  loop(start, start)
}

largestPalindromic()
