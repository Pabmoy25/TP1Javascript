const num1 = parseInt (prompt ("Ingresar el primer número"));
const num2 = parseInt (prompt ("Ingresar el segundo número"));

if ( num1 > num2 ) {
    document.write ("El número "+num1+" es mayor que el número "+num2);
} else if (num2 > num1) {
    document.write ("El número "+num2+" es mayor que el número "+num1);
} else {
    document.write ("Los números ingresados son iguales ("+num2+")");
}