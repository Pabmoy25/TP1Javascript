const num1 = parseInt(prompt("ingrese un primer numero"));
const num2 = parseInt(prompt("ingrese un segundo numero"));
const num3 = parseInt(prompt("ingrese un tercer numero"));

if (num1 === num2 && num1 > num3) {
  document.write(
    `El 1er número ( ${num1} ), es igual al 2do ( ${num2} ) y mayor que el 3ero (${num3})`
  );
} else if (num2 === num3 && num2 > num1) {
  document.write(
    `El 2do número ( ${num2} ) es igual al 3ro ( ${num3} ) y mayor que el 1 (${num1})`
  );
} else if (num1 === num3 && num1 > num2) {
  document.write(
    `El 1er número ( ${num1} ), es igual al 3ro ( ${num3} ) y mayor que el 2do (${num2})`
  );
} else if (num1 > num2 && num1 > num3) {
  document.write(
    `El 1er número ( ${num1} ), es mayor que el 2do (${num2}) y que el 3ro (${num3})`
  );
} else if (num3 > num2) {
  document.write(
    `El 3er número ( ${num3} ) es mayor que el 2do (${num2}) y que el 1ro (${num1})`
  );
} else if (num2 > num3) {
  document.write(
    `El 2do número ( ${num2} ) es mayor que el 1ro (${num1}) y que el 3ro (${num3})`
  );
} else {
  document.write(`Los números ingresados son iguales (${num2})`);
}
