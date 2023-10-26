const num1 = parseInt(prompt("ingrese el número"));

if (num1 % 2 === 0) {
  document.write("Es divisible por 2");
} else if (num1 % 3 === 0) {
  document.write("Es divisible por 3");
} else if (num1 % 5 === 0) {
  document.write("Es divisible por 5");
} else {
  document.write("Es divisible por 7");
}
