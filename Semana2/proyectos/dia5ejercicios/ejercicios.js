//Ejercicio 2 Base del triángulo
var baseTringulo = 20;
var alturaTriangulo = 34;
var areaDelTriangulo = (baseTringulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es ${areaDelTriangulo}`);

//Ejercicio 2 Cambio de moneda
var monedaMexicana = 10;
var tipoDeCambioDolares = 2.23;
var cantidadDeDinero = monedaMexicana / 2.23;
console.log(`Pesos mexicanos en dólares es ${cantidadDeDinero}`);

//Ejercicio 3 Edad de personal
var anioDeNacimiento = 2000;
var anioActual = 2019;
var edadDelPersonal = anioActual - anioDeNacimiento;
console.log(`Su edad es ${edadDelPersonal}`);

//Ejercicio 4 cobro estacionamiento
var tiempoEnCochera = 4;
var precioPorHora = 3;
var cobroPorEstacionamiento = tiempoEnCochera * precioPorHora;
console.log(`El total a pagar por el estacionamiento es ${cobroPorEstacionamiento}`);

//Ejercicio 5 cobro por trabajos de pintura
var metrosCuadrados = 234;
var precioPorMetroCuadrado = 456;
var cobro = metrosCuadrados * precioPorMetroCuadrado;
console.log(`El cobro por metro cuadrado es ${cobro}`);

//Ejercicio 6 hipotenusa del triángulo
var lado1 = 4;
var lado2 = 3;
console.log(`La hipotenusa es igual a ${Math.sqrt((lado1*lado2)+(lado1*lado2).toFixed(3))}`);

//Ejercicio 

//==================
var numeroPostivoNegativo = -9;

if(numeroPostivoNegativo >= 0) {
    console.log(`${numeroPostivoNegativo} eres un número positivo`)
} else {
    console.log (`${numeroPostivoNegativo} eres un número negativo`)
}

//3.1
var edad = prompt("Ingrese su edad");
if(edad >= 18){
    alert("Usted puede votar");
} else {
    alert("Aún no puedes votar")
}

//3.2
var hrsTrabajadas = +prompt("Ingrese las horas trabajadas");
var pgHrs = +prompt("Ingrese pago por hora")
var pgSemanal;
if(hrsTrabajadas <= 40){
    alert(`Su pago semanal es: ${pgSemanal = hrsTrabajadas * pgHrs}`)
}else{
    alert(`Su pago semanal es: ${pgSemanal = hrsTrabajadas * pgHrs + ((hrsTrabajadas - 40)*pgHrs)*2 }`)
}

//3.3
var mntoInversion = +prompt("Ingrese el monto con el que cuenta");
if(mntoInversion <= 10){
    alert("Ud. puede comprar una tarjeta");
} else if (mntoInversion >= 11 && mntoInversion <= 100){
    alert("Ud. puede comprar un chocolate");    
} else if (mntoInversion >= 101 && mntoInversion <= 250){
    alert("Ud. puede comprar flores");
} else{
    alert("Ud. puede comprar un anillo");
}

//3.4

//3.5
var nmb1 = prompt("Ingrese el primer nombre");
var edad1 = +prompt("Ingrese la primera edad");
var nmb2 = prompt("Ingrese el segundo nombre");
var edad2 = +prompt("Ingrese la segunda edad");
var nmb3 = prompt("Ingrese el tercer nombre");
var edad3 = +prompt("Ingrese la tercera edad");

if(edad1<edad2 && edad1<edad3){
    alert(`${nmb1} eres el menor`)
}else if(edad2<edad3){
    alert(`${nmb2} eres el menor`)
}else {
    alert(`${nmb3} eres el menor`)
}

//3.6
var costoArticulo = +prompt ("Ingrese el costo del producto");
if(costoArticulo >=200){
    alert(`El costo del producto es: ${costoArticulo} soles y su descuento es: ${costoArticulo*0.15} soles`);
}else if(costoArticulo > 100 && costoArticulo < 200){
    alert(`El costo del producto es: ${costoArticulo} soles y su descuento es: ${costoArticulo*0.12} soles`);
}else{
    alert(`El costo del producto es: ${costoArticulo} soles y su descuento es: ${costoArticulo*0.10} soles`)
}
//3.7
var edadEstudiante = parseInt(prompt("Ingrese su edad"));
var promedio;
var beca;
if(edadEstudiante > 18){

}

//4.1
var salInicial = 1500;


























































//3.3 Se quiere precio por X cantidad de productos

var xProductos = 1010;
var pagoXproductos;
if(xProductos >= 1000) {
    pagoXproductos = xProductos * 0.85;
} else {
    pagoXproductos = xProductos * 0.9;
}
console.log(pagoXproductos);

//3.4 Descuento en traje
var precioDeTraje = 2400;
var precioFinalTraje;
var descuentoPorTraje;

if(precioDeTraje > 2500){
    precioFinalTraje = precioDeTraje * 0.15;
    descuentoPorTraje = precioDeTraje - descuentoPorTraje;
} else {
    precioFinalTraje = precioDeTraje * 0.8;
    descuentoPorTraje = precioDeTraje - descuentoPorTraje;
}
console.log(`El descuento obtenido es ${precioFinalTraje} y el precio final del traje es ${descuentoPorTraje}`);

//3.5 tre números
var cantidad1 = 23;
var cantidad2 = 34;
var cantidad3 = 89;
var mayorCantidad;

if(cantidad1 > cantidad2) {
    mayorCantidad = cantidad1;
} else {
    mayorCantidad = cantidad2;
} if (cantidad2 > cantidad3) {
    mayorCantidad = cantidad2;
} else {
    mayorCantidad = cantidad3;
}

console.log(`El número mayor es ${mayorCantidad}`);

// 3.6 Langosta ahumada
var numeroPersonas = 100;
var PrecioTotalBanquete;
if(numeroPersonas > 300){
    PrecioTotalBanquete = numeroPersonas * 75;
} else {
    if(numeroPersonas > 200) {
        PrecioTotalBanquete = numeroPersonas * 85;
    } else {
        PrecioTotalBanquete = numeroPersonas * 95;
    }
}
console.log(`El precio del banquete es ${PrecioTotalBanquete}`);

//3.7 Uvas
var kilos = 134;
var tipo;
var tipoA;
var pagoPorUvas;
var tamanioUvas;
var tamanio1;



//3.3 14 febrero
var miDinero = prompt("Ingrese cantidad de dinero para regalo");
if(miDinero <= 10){
    alert('Te alcanza para una tarjeta')
} else if (miDinero >= 11 && miDinero <= 100){
    alert('Te alcanza para una chocolates')
} else if (miDinero >= 101 && miDinero <= 250){
    alert('Te alcanza para flores')
} else {
    alert('Te alcanza para un anillo')
}
 //3.4 estacionamiento
 var horasParqueo = prompt("Ingrese horas de parqueo");
 var costoTotalParqueo;
 if(horasParqueo <=2){
     costoTotalParqueo = horasParqueo * 5;
 } else if(horasParqueo >2 && horasParqueo <=5){
     costoTotalParqueo = horasParqueo * 4;
 } else if(horasParqueo >5 && horasParqueo <= 10) {
    costoTotalParqueo = horasParqueo * 3;
 } else {
     costoTotalParqueo = horasParqueo * 2;
 }
alert(`El costo total del parqueo es ${costoTotalParqueo}`);

//3.5 edad y nombre
var nom1 = prompt("Ingrese el nombre de la primera persona");
var edad1 = prompt("Ingrese la edad de la primera persona");
var nom2 = prompt("Ingrese el nombre de la segunda persona");
var edad2 = prompt("Ingrese la edad de la segunda persona");
var nom3 = prompt("Ingrese el nombre de la tercera persona");
var edad3 = prompt("Ingrese la edad de la tercera persona");
if(edad1<edad2 && edad1<edad3){
    alert(nom1+" es el menor con "+edad1+" años");
}else if(edad2<edad3){
    alert(nom2+" es el menor con "+edad2+" años");
}else{
    alert(nom3+" es el menor con "+edad3+" años");
}

//3.6 Costo y descuento de un artículo
var costoInicial = prompt("Ingrese el costo del articulo: ","");
var descuento;
if(costoInicial >= 200) {
    descuento = precioInicial * 0.15;
} else if(costoInicial >100 && precioInicial<200) {
    descuento = precioFinal * 0.12;
} else {
    costoInicial = precioFinal * 0.1;
}

//3.21 condicionales
var saldoActual, saldoProximo,
    pagoMinimo, 
    pagoPNGI, 
    saldoAnterior, 
    montoCompras, 
    pagoAnterior, 
    interes;
montoCompras = 3000;
saldoAnterior = 2000;
pagoAnterior = 500;
saldoActual = montoCompras - saldoAnterior - pagoAnterior;
pagoMinimo = saldoActual * 0.15;
pagoPNGI = saldoActual * 0.85;

pagoActual = 150;
if(pagoActual < pagoPNGI){
    interes = (saldoActual * 0.12) + 200;
    saldoProximo = saldoActual - pagoActual + interes;
}else {
    saldoProximo = saldoActual - pagoActual;
}

console.log(`------BOLETA-----`)
console.log(`------BOLETA-----`)
console.log(`Pago => ${pagoActual}`);
console.log(`Saldo próximo => ${saldoProximo}`);
console.log(`Se le ha generado un interés de ${interes}`);

