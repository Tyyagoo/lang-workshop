open Belt

type t = {
  value: array<string>,
  length: int,
}

// Helper module
module Helper = {
  let is_numerical = str => {
    let regex = Js.Re.fromString("^[0-9]+$")
    switch str->Js.String2.match_(regex) {
    | None => {
        Js.log(`${str} isn't a number.`)
        false
      }
    | Some(_) => true
    }
  }

  let rec format = arr => {
    switch arr->Array.get(0) {
    | None => ["0"]
    | Some(v) => v === "0" ? arr->Array.sliceToEnd(1)->format : arr
    }
  }

  let string_arr_to_int_stack = arr => {
    let stack = MutableStack.make()
    let length = arr->Array.length
    let rec loop = i => {
      i == length
        ? ()
        : {
            let element = switch arr->Array.get(i) {
            | None => 0
            | Some(v) => int_of_string(v)
            }
            stack->MutableStack.push(element)
            loop(i + 1)
          }
    }
    loop(0)
    stack
  }
}

module Constants = {
  let zero = {
    value: ["0"],
    length: 1,
  }
}

let of_string = str => {
  switch str->Helper.is_numerical {
  | false => {value: ["NaN"], length: 1}
  | true => {
      let arr = str->Js.String2.split("")->Helper.format
      {value: arr, length: arr->Array.length}
    }
  }
}

let to_string = val => {
  val.value->Array.reduce("", (r, a) => r ++ a)
}

let add = (this, other) => {
  let len = (this.length > other.length ? this.length : other.length) + 1
  let arr = Array.make(len, "0")

  let t_stack = this.value->Helper.string_arr_to_int_stack
  let o_stack = other.value->Helper.string_arr_to_int_stack

  let rec loop = (i, carry) => {
    i == len
      ? ()
      : {
          let x = switch t_stack->MutableStack.pop {
          | None => 0
          | Some(v) => v
          }

          let y = switch o_stack->MutableStack.pop {
          | None => 0
          | Some(v) => v
          }
          let v_carry = carry ? 1 : 0
          let result = x + y + v_carry
          // Js.log(`x: ${string_of_int(x)} --- y: ${string_of_int(y)} --- cv: ${string_of_int(v_carry)} --- r: ${string_of_int(result)}`)
          let _ = arr->Array.set(len - i - 1, mod(result, 10)->Int.toString)
          loop(i + 1, result / 10 != 0)
        }
  }
  loop(0, false)
  let arr = arr->Helper.format
  {value: arr, length: arr->Array.length}
}
