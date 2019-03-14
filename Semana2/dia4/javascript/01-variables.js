//VARIABLES
//se crean con el prefijo "var"
//sus nombres no pueden inicar con un número
//GRAL en JS, colocar un ";" al finalizar
//una sentencia o línea de código

var x = 5;
//Sirve para mostrar datos en el navegador
//en la zona del consola
x = 69;
var y = x;

y = y + 1;
console.log(x);

//TIPO DE DATOS
//NUMÉRICOS | NUMBER => Todos los números
var sueldo = 2500.00;
var edad = 25;
//TEXTOS | STRING | CADENA => Conjunto de caracteres
var saludo = "hola amiguitos";
var despedida = "Chau amiguitos"
//BOOLEANAS - (true o false)
var verdadero = true;
var falsa = false;

console.log(sueldo);
console.log(despedida);
console.log(saludo);

var n1 = 8;
var n2 = 9;
var suma = n1 + n2;
var resta = n1 - n2;
var multiplicar = n1 * n2;
var division = n1 / n2;

console.log("n1 =>" + n1);
console.log("n2 =>" + n2);
console.log("suma =>" + suma);

console.log("modulo (20/7) residuo =>" + (20%7));

//-------

var numeroA=2
var numeroB=3
var suma=numeroA+numeroB;

//Ejercicio 2 Promedio de notas

var nota1 = 13;
var nota2 = 15;
var nota3 = 17;
var nota4 = 18;
var suma = nota1 + nota2 + nota3 + nota4;
var promedio = suma / 4;
console.log(promedio);

//Ejercicio 3 Area del rectangulo

var base = 23;
var altura = 45;
var areaRectangulo = base * altura;
console.log(areaRectangulo);

//Ejercicio 3 Area del circulo

var radio = 23;
var PI = 3.1416;
var areaCirculo = PI * radio * radio;
console.log(areaCirculo);

//Ejercicio 4 Area del terreno
var A = 8;
var B = 12;
var C = 4;
var areaRectangulo = B * A;
var areaTriangulo = B * (A-C) / 2;
var areaTerreno = areaRectangulo + areaTriangulo;
console.log(areaTerreno);

//Ejercicio 2
//inicio
//Dinero Mexicano
//Dinero Adquirido = Dinero Mexicano * 0,00032
//fin

var dineroMexicano = 100;
var tipoDeCambioDolares = 0.40;
var dineroAdquirido = dineroMexicano / tipoDeCambioDolares;
console.log(dineroAdquirido);

//Ejercicio 9 Costo total de llamada
//Inicio
//Leer tiempo, costo
//Hacer Costo total llamada = tiempo * costo
//leer costo total 
//Fin

var tiempoLlamada = 60;
var costoLlamadaPorMinuto = 2;
var costoTotalLlamada = tiempoLlamada * costoLlamadaPorMinuto;
console.log(costoTotalLlamada);
