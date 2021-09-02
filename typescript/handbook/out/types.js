"use strict";
/*
    GENERIC TYPES
*/
var echo = function (obj) { return obj; };
var text = echo("Hello World!");
var num = echo(5);
var bool = echo(true);
var p = echo({ name: 'Thiago' });
var p2 = echo(p);
function fn() {
    return {
        data: 'a lot',
        number: 59,
        bool: true,
    };
}
var sameAsReturn = {
    data: 'data',
    number: 0,
    bool: true,
};
