var arreglo = new Array();
var arreglo2 = ["a", "c", "b", "z", "f", "w", "y", "l", "p", "g"];
console.log(arreglo2.sort);

//Propiedades
document.write(`<p>tamaño de arreglo2 ${arreglo2.length}</p>`);
document.write(`<p>Insertar un elemento al fianl ${arreglo2.push(80)}</p>`);
document.write(`<p>Eliminar y obtener el úmtimo elemento ${arreglo2.pop()}</p>`);
document.write(`<p>slice(inicio,final) => devuelve un arreglo comsiderando las posiciones inicio y fin${arreglo2.slice(3,6)}</p>`);
console.log(arreglo2);

document.write(`<p>splice(inicio,nro de elemnts que queremos borrar) => cambia el arreglo origianl ${arreglo2.splice(3)}</p>`);
console.log(arreglo2);
document.write(`<p>Indexof => retorna la primera posción de un elemento buscado ${arreglo2.indexOf(5)}</p>`);
document.write(`<p>SORT  ordena los elementos de una arreglo ${arreglo2.sort()}</p>`);
console.log(arreglo2);


