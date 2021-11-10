//Operadores matemáticos 
var a =20;
var b = 5.5;
var c = 10;

"a + b = " + (a + b);
"a - c = " + (a - c);
"b * c = " + (b * c);
"a / b = " + (a / b);
"a % c = " + (a % c);
"c**5 = " + (c**5);

// No confundir las siguientes operaciones 
"a + b * c = " + (a + b * c);
"(a + b)*c = " + (a + b)*c;

// Operadores de Comparación
8 == "8"; // para js no hay dieferencia entre un string con valor 8 y el numero 8 
8 ==="8"; // Para validar que no solo tiene el mismo valor sino tambien el tipo, se utiliza ===
8 != "8"; // es tambien reconoido como un distinto simple
8 !== "8"; // un operador distinto doble. 

// operadores logicos   ||
"true && true = " + (true && true);
"true && false = " + (true && false);
"true && true && false = " + (true && true && false);
"false && false = " + (false && false);

"true || true = " + (true || true);
"true || false = " + (true || false); 
"true || true || false = " + (true || true || false);
"false || false = " + (false || false);

// combinadas
"true && (true|| false) = " + true && (true || false);
"false || (true && false) = " + true || (true && false);


