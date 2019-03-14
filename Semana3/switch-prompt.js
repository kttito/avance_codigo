//La estructuea swich evalúa un conjunto de valores
//posibles que una variable puede tomar
var edad = 20;
switch(edad){
    case 20:
        console.log("Vale 20");
        break;
    case 21:
        console.log("Vale 21"); 
        break;
    case 22:
        console.log("Vale 22"); 
        break;
    default:
        console.log("No existen estoy datos - ERROR");
        break;
}
console.log("Fin del programa"); //Factorizamos 

//*********** 
var precio = 6000;
switch(true) {
    case precio > 400 && precio < 1000:
        console.log("precio > 400 && precio < 1000");
        break;
    case precio >= 1000 && precio < 2000:
        console.log("precio >= 1000 && precio < 2000");
        break;
    default:
        console.log("no está en el rango");
        break;
}
//********* 
var nota = 9;
switch(true) {
    case nota <= 20 && nota >= 19:
    console.log("Tu nota es sobresaliente");
    break;
    case nota <= 18 && nota >= 17:
    console.log("Tu nota es muy buena");
    break;
    case nota <= 16 && nota >= 14:
    console.log("Tu nota es buena");
    break;
    case nota <= 13 && nota >= 11:
    console.log("Tu nota es suficiente");
    break;
    case nota <= 11 && nota >= 0:
    console.log("Tu nota es insuficiente");
    break;  
}

//prompt => permite al usuario ingresar datos y caprurarlos
var nombre = prompt("ingrese su nombre");
var edad = prompt("ingrese su edad");
//parseInt => convierte string a entero

var edadNumber = parseInt(edad);

console.log(`${nombre}tiene  ${edad} años`);
console.log(edad);
console.log(edadNumber);

//******
var nroHijos = parseInt(prompt("Ingrese el número de hijos"));
console.log(nroHijos);

//ECMA Script
//el signo "+" como prefijo convierte un string a entero
var nroHijos2 = +edad;
