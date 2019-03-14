'use strict';
//Cuando se incluye () al final de la función,
//el vaor que toma la variable 'anónima' es el resultado
//de la ejecución.
//Esa función nunca más podrá ser ejecutada
var anon = function(a,b) {
    return a+b;
}();

function normal(a,b){
    return a+b;
}

console.log(anon);
//console.log(anon(4,5));
console.log(normal(56,5));