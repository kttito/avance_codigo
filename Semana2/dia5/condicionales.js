//CONDICIONALES
//hacer ejerciis 88
// = es asiganción
//===============0
//COMPARADROES ARITMÉTICOS

//COMPARADORES LÓGICOS
//&& | y | and
// ambas condiciones deben ser verdaderas para dar un resultado verdadero
// || | ó | or// ambas condiciones deben ser falsas para dar un resultado se falso

var edad = 18;
if(edad > 17){
    console.log("Sí, pásale joven");
}else{
    console.log("No, vaya a limpiarse los mocos");
}

var x = 90;
var y = 80;
var z = 15;

if((x/2)>(z*3) || ((z>(y+x)/8) && y!= 81)){
    console.log("verdadero");
}else{
    console.log("falso");
}

//Calcular si un año es bisiesto
var anio = 2018;
//tiene que ser mñultiplo de 4 Y no se deber múltiplo de 100 
// o en todo caso que sea múltiplo de 400

if((anio % 4 == 0) && (anio % 100 != 0) || anio % 400 == 0){
    console.log("Soy un año bisiesto" + anio);
}else{
    console.log("No soy bisiesto" + anio);
}


var sueldo = 2500.00;
if(!(sueldo>2500)){
    console.log("si es mayor");
}else{
    console.log("No es mayor");
}

var apto = true;
if(true){
    console.log("Es apto");
}else{
    console.log("Noes apto");
}

var apto = true;
if(!apto){
    console.log("No Es apto");
}else{
    console.log("es apto");
}

//Si es ropa para dama hacer un 15% de descuento 
//Si es ropra varón hacer un 20% sobre precio
    //si la talla es m hacer un 10% de descurento sobe el precio descontado
var talla = "m";
var genero = "dama";
var precio = 150.00;
var precioFinal = 0;

if((genero == "dama")){
    precioFinal = precio * 0.85;
}else{
    precioFinal = precio * 0.80;
}

if(talla == "m"){
    precioFinal = precioFinal * 0.9;
}

//console.log("Precio final " + precioFinal);
console.log(`Precio final ${precioFinal} soles`);
