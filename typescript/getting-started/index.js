"use strict";
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("hit the gas!");
    };
    return Car;
}());
var Golfer = /** @class */ (function () {
    function Golfer() {
    }
    Golfer.prototype.drive = function () {
        console.log("hit the ball");
    };
    return Golfer;
}());
var showEntity = function (entity) { return console.log("There's a named entity -> " + entity.name); };
var showPosition = function (pos) { return console.log("x: " + pos.x + " y: " + pos.y); };
var showPositionedEntity = function (posEnt) {
    return console.log("There's an human: \nName: " + posEnt.name + "\nPosition: (" + posEnt.x + ", " + posEnt.y + ")");
};
var showEmpty = function (empty) { return console.log(empty); };
var main = function () {
    var point = {
        x: 20,
        y: -10,
    };
    var god = {
        name: 'Deus',
    };
    var human = {
        name: 'Thiago',
        x: 139,
        y: 247,
    };
    showEntity(god);
    showEntity(human);
    // showEntity(point); -> Point doesn't have 'name'
    showPosition(point);
    showPosition(human);
    // showPosition(god); -> God is omnipresent
    showPositionedEntity(human);
    // showPositionedEntity(god);
    // showPositionedEntity(point);
};
var main2 = function () {
    var emp = {};
    var a = { k: 2 };
    showEmpty(emp);
    showEmpty(a);
    /*
    'a' has all of the properties that Empty does, because Empty has no properties.
    So 'a' is Empty '-'.
    */
    var car = new Golfer();
    var golfer = new Car();
    car.drive();
    golfer.drive();
    // '----'
};
// main();
main2();
