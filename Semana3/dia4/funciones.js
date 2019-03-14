'use strict';
//JS es estricto al momento de respetar los ámibots de las variables,
//los puntos ycomas
//LA trnasformación automática de los tipos de datos

//VARIABLE GLOBAL => Se puede usar en todo el documento
//Se puede usar en todas las funciones
var a = 10;
console.log(`a => ${a}`)
//Función que no recibe parámetros ni retorna valor
//Declanrando a la función
function miFuncion(){
    a = 78;
    console.log(`a => ${a}`)
}
miFuncion();
console.log(`a => ${a}`)
