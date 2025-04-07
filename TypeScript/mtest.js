"use strict";
var count;
(function (count) {
    count[count["one"] = 1] = "one";
    count[count["two"] = 2] = "two";
    count[count["three"] = 3] = "three";
    count[count["four"] = 4] = "four";
    count[count["five"] = 5] = "five";
})(count || (count = {}));
console.log(count.one);
console.log(count.two);
console.log(count.four);
console.log(count.five);
