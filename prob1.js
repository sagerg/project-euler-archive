// LINK: https://projecteuler.net/problem=1

for (var i = 0; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    document.write(i + "<br />");
  }
}
