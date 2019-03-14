//posición 0 espacio o elemts
var arreglo = [3, "Holi", true, 8, -90];
//var arreglo2 = new Array();
//var arreglo2 = [];
//var arreglo2 = new Array(7);
console.log(arreglo[0]+1);
console.log(arreglo[2] + arreglo[3])

var arreglo3 = [5,false,[89,"unstring"]];
console.log(arreglo3[2][1]);
//PROPIEDADES DE LOS ARREGLOS
//length => Retorna la cantidad de elementos del arreglo
console.log(arreglo3.length);
//push => agrega al final del arreglo, un elemento dado
arreglo3.push(90);
console.log(arreglo3);
//pop => Extrae el último elemento del arreglo
var ultimoElemento = arreglo3.pop();
console.log(ultimoElemento);
console.log(arreglo3);
//filter map reduce forEach 