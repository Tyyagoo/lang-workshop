function getUsersOnlineMessage(numUsersOnline: number | null | undefined) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

console.log(getUsersOnlineMessage(NaN));
console.log(getUsersOnlineMessage(5));
console.log(getUsersOnlineMessage(0));
console.log(getUsersOnlineMessage(null));
console.log(getUsersOnlineMessage(undefined));

// value !== null -> check if isn't null
// value != null -> check if isn't null or undefined
// the same aplies to checking if is undefined


interface Circle {
    kind: "circle";
    radius: number;
}
   
interface Square {
    kind: "square";
    sideLength: number;
}
   
type Shape = Circle | Square;


const getShapeArea = (shape: Shape) : number => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            return 0;
    }
};