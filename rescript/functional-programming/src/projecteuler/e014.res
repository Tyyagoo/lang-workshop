open Belt

let is_even = n => mod(n, 2) == 0
let calculate_next = n => is_even(n) ? n / 2 : 3 * n + 1
let generate_sequence = start => {
  let rec loop = (seq, i) => {
    // Js.log(`Seq: ${string_of_int(start)} -> ${string_of_int(i)}`)
    let curr = seq->Array.getExn(i)
    let next = calculate_next(curr)
    let arr = seq->Array.concat([next])
    next === 1 ? (arr, i + 2) : loop(arr, i + 1)
  }
  loop([start], 0)
}

let gen_all = (lower, upper) => {
  let rec loop = (i, big) => {
    i === upper
      ? big
      : {
          let seq = generate_sequence(i)
          let (_, x, c) = big
          // Js.log(`${string_of_int(x)} -- ${string_of_int(c)} -- ${string_of_int(i)}`)
          let (tmp, y) = seq
          let biggest = y > x ? (tmp, y, i) : big
          loop(i + 1, biggest)
        }
  }
  loop(lower, ([], 0, 0))
}

// cade as threads fvck