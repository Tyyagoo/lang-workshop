// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function sumIf(n, sum, condition) {
  if (Curry._1(condition, n)) {
    return n + sum | 0;
  } else {
    return sum;
  }
}

function isEven(n) {
  return n % 2 === 0;
}

function fibonacci(limit) {
  var _prev = 0;
  var _curr = 1;
  var _sum = 0;
  while(true) {
    var sum = _sum;
    var curr = _curr;
    var prev = _prev;
    if (curr > limit) {
      return sum;
    }
    _sum = sumIf(curr, sum, isEven);
    _curr = prev + curr | 0;
    _prev = curr;
    continue ;
  };
}

console.log(fibonacci(4000000));

var threshold = 4000000;

exports.threshold = threshold;
exports.sumIf = sumIf;
exports.isEven = isEven;
exports.fibonacci = fibonacci;
/*  Not a pure module */
