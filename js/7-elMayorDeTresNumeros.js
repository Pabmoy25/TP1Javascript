const num1 = parseInt(prompt("ingrese un primer numero"));
const num2 = parseInt(prompt("ingrese un segundo numero"));
const num3 = parseInt(prompt("ingrese un tercer numero"));

if (num1 > num2 && num1 > num3) {
  document.write(
    `El número 1 ( ${num1} ) es mayor que el número 2 (${num2}) y 3 (${num3})`
  );
} else if (num3 > num2) {
  document.write(
    `El número 3 ( ${num3} ) es mayor que el número 2 (${num2}) y 1 (${num1})`
  );
} else if (num2 > num3) {
  document.write(
    `El número 2 ( ${num2} ) es mayor que el número 3 (${num3}) y 1 (${num1})`
  );
  } 
  else {
  document.write(`Los números ingresados son iguales (${num2})`);
}

