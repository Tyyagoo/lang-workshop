Js.log("Hello, World!")

let x = 7;
// x = 6;
let y = ref(7);
Js.log(x);
Js.log(y);
y := y.contents + 1;
Js.log(x);
Js.log(y);

let i = 5;
let f = 4.5;

// Js.log(i + f);
// Js.log(i +. f);
Js.log(float_of_int(i) +. f); // console.log(5 + 4.5)
Js.log(i + int_of_float(f)); // console.log(9)


let hello = "Hello, ";
let name = "Tyyago";
Js.log(hello ++ name);
Js.log(`${hello}${name}`)


let truth = true;
let lie = false;

Js.log(!truth == lie);
Js.log(truth || lie);
Js.log(truth && lie);
Js.log(truth !== lie);

type vector = {
    x: int,
    y: int
};

let point = {
    x: 20,
    y: 30
}

let another = {
    ...point,
    x: 5
};

let anotherPoint = {
    ...point,
    y: 5
};

Js.log(point);
Js.log(another);
Js.log(anotherPoint);


let arr = [2, 5, 6, 8];
let tuple = ("Tyyago", 18, 1.80);
Js.log(arr);
Js.log(tuple);

// we don't have named functions -> function fn() => x;

let five = () => 5;
let sum = (x, y) => x + y;
let increment = sum(1);
let decrement = sum(-1);

Js.log(sum(5, 7));
Js.log(increment(0));
Js.log(decrement(0));

let superComplexFunction = (x, y) => {
    let a = x * y;
    let b = if a > 25 {"high value"} else {"low value"};
    b;
}

let l = superComplexFunction(5, 5);
let h = superComplexFunction(6, 10);

Js.log(l);
Js.log(h);

for c in 0 to 15 {
    Js.log(c);
}

for c in 15 downto 0 {
    Js.log(c);
}