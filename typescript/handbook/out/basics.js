"use strict";
var message = "Hello World!";
var println = function (message) { return console.log(message); };
println(message);
var user = {
    name: 'Thiago',
    age: 18,
    toString: function () {
        return "User -> " + this.name + " (" + this.age + ")";
    },
};
// println(user); implicit call isn't supported, obviously.
println(user.toString());
