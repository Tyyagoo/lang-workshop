"use strict";
// generics
var getFirstElement = function (arr) {
    return arr[0];
};
var getLastElement = function (arr) {
    return arr[arr.length - 1];
};
var intArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stringArray = ['a', 'd', 'z'];
console.log(getFirstElement(intArray));
console.log(getLastElement(intArray));
console.log(getFirstElement(stringArray));
console.log(getLastElement(stringArray));
var mapToStringArray = function (arr) {
    return arr.map(function (t) { return t.toString(); });
};
var intStringArray = mapToStringArray(intArray);
console.log(intStringArray);
// better way to map is:
var map = function (arr, fn) {
    return arr.map(fn);
};
var newIntArray = map(intStringArray, function (s) { return parseInt(s); });
console.log(newIntArray);
