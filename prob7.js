// LINK https://projecteuler.net/problem=7

var primeArray = [],
  integer = 10001;

primeArray = getPrimes(integer);
for (var i = 0; i < primeArray.length; i++) {
  document.write(primeArray[i] + "<br />");
}
function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
