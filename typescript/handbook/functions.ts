
// generics
const getFirstElement = function<T>(arr: T[]) : T {
    return arr[0];
};

const getLastElement = <T>(arr: T[]): T => {
    return arr[arr.length - 1];
}

let intArray = [0,1,2,3,4,5,6,7,8,9,10];
let stringArray = ['a','d','z'];

console.log(getFirstElement(intArray));
console.log(getLastElement(intArray));

console.log(getFirstElement(stringArray));
console.log(getLastElement(stringArray));

interface convertibleToString {
    toString: Function;
}

const mapToStringArray = (arr: convertibleToString[]) : string[] => {
    return arr.map((t) => t.toString());
};

let intStringArray = mapToStringArray(intArray);
console.log(intStringArray);

// better way to map is:

const map = <T, U>(arr: T[], fn: (arr: T) => U) : U[] => {
    return arr.map(fn);
};

let newIntArray = map(intStringArray, (s: string) => parseInt(s));
console.log(newIntArray);