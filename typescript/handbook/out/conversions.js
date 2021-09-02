"use strict";
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are " + numUsersOnline + " online now!";
    }
    return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(NaN));
console.log(getUsersOnlineMessage(5));
console.log(getUsersOnlineMessage(0));
console.log(getUsersOnlineMessage(null));
console.log(getUsersOnlineMessage(undefined));
var getShapeArea = function (shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            return 0;
    }
};
