// LINK https://projecteuler.net/problem=5

var integerArray = [],
  i = 0;
do {
  i++;
  integerArray.push(i);
} while (
  i % 2 != 0 ||
  i % 3 != 0 ||
  i % 4 != 0 ||
  i % 5 != 0 ||
  i % 6 != 0 ||
  i % 7 != 0 ||
  i % 8 != 0 ||
  i % 9 != 0 ||
  i % 10 != 0 ||
  i % 11 != 0 ||
  i % 12 != 0 ||
  i % 13 != 0 ||
  i % 14 != 0 ||
  i % 15 != 0 ||
  i % 16 != 0 ||
  i % 17 != 0 ||
  i % 18 != 0 ||
  i % 19 != 0 ||
  i % 20 != 0
);
document.write(integerArray[integerArray.length - 1]);
