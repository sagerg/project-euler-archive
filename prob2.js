// LINK https://projecteuler.net/problem=2

var fibon = [1, 2]; // list of fibonnaci numbers
var fiboneve = [2]; // list of even fibonnaci numbers
for (var i = 0; i < fibon.length; i++) {
  var nxtn = fibon[i] + fibon[i + 1];
  if (nxtn < 4000000) {
    fibon.push(nxtn);
  }
  if (nxtn < 4000000 && nxtn % 2 === 0) {
    fiboneve.push(nxtn);
  }
}
document.write(
  "a. Sum of even fibonacci numbers: ",
  fiboneve.reduce(getSum) + "<br />"
);
document.write("b. Even fibonacci numbers: ", fiboneve + "<br />");
document.write("c. Fibonacci numbers: ", fibon);

function getSum(m, n) {
  return m + n;
}
