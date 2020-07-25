// LINK https://projecteuler.net/problem=6

var squaredNumArray = [],
  toSumArray = [];
integer = 100;

for (var i = 1; i < integer + 1; i++) {
  var tosum = i;
  var addtoSQarray = square(i);
  toSumArray.push(tosum);
  squaredNumArray.push(addtoSQarray);
}

var sumofsq = squaredNumArray.reduce(getSum);
var sqofsum = square(toSumArray.reduce(getSum));
document.write("The sum of the squares: " + sumofsq + "<br />");
document.write("The square of the sum: " + sqofsum + "<br />");
document.write("Difference: " + getDifference(sqofsum, sumofsq) + "<br />");

function square(num) {
  return num * num;
}
function getSum(total, n) {
  return total + n;
}
function getDifference(total, n) {
  return total - n;
}
