let sumTo = n => {
  let rec loop = (i, sum) => i == 0 ? sum : loop(i - 1, sum + i)
  loop(n, 0)
}

let swap = ((x, y)) => (y, x)
let chars = ("a", "b")
let numbers = (1, 2)
let mix = ("a", 1)

Js.log(swap(chars))
Js.log(swap(numbers))
Js.log(swap(mix))

//Js.log(sumTo(5))
