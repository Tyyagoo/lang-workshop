// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("rescript/lib/js/caml_int32.js");

function intPow2(a) {
  return Math.imul(a, a);
}

function isTriplet(param) {
  var c = param.c;
  var b = param.b;
  var a = param.a;
  return (Math.imul(a, a) + Math.imul(b, b) | 0) === Math.imul(c, c);
}

function isNatural(param) {
  if (param.a > 0 && param.b > 0) {
    return param.c > 0;
  } else {
    return false;
  }
}

function isDesiredTriplet(param) {
  return ((param.a + param.b | 0) + param.c | 0) === 1000;
}

function checkTriplet(v) {
  if (isTriplet(v) && isNatural(v)) {
    return isDesiredTriplet(v);
  } else {
    return false;
  }
}

function produceTriplets(limit, sum) {
  var sumBy2 = sum / 2 | 0;
  var _i = 1;
  while(true) {
    var i = _i;
    if (i === limit) {
      return {
              a: -1,
              b: -1,
              c: -1
            };
    }
    if (Caml_int32.mod_(Math.imul(sum, sumBy2 - i | 0), sum - i | 0) === 0) {
      return {
              a: i,
              b: Caml_int32.div(Math.imul(sum, sumBy2 - i | 0), sum - i | 0),
              c: sum - (Caml_int32.div(Math.imul(sum, sumBy2 - i | 0), sum - i | 0) + i | 0) | 0
            };
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function multiplyTriplet(param) {
  return param.a * param.b * param.c;
}

var t = produceTriplets(500, 1000);

console.log(t);

var product = multiplyTriplet(t);

console.log(product);

exports.intPow2 = intPow2;
exports.isTriplet = isTriplet;
exports.isNatural = isNatural;
exports.isDesiredTriplet = isDesiredTriplet;
exports.checkTriplet = checkTriplet;
exports.produceTriplets = produceTriplets;
exports.multiplyTriplet = multiplyTriplet;
exports.t = t;
exports.product = product;
/* t Not a pure module */
