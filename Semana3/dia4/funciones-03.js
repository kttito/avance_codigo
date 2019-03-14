//Funciones que reciben parámtros y retornan valor
function multiplicar(...numeros){
    var resultado = 1;
    for(let i = 0; i < resultado.length; i++){
        resultado = resultado *numeros[i];
    }
    return resultado;
}

var res1 = multiplicar(4,5,6,3);
var res2 = multiplicar(4,5);
//console.log(`TOTAL resultado 1 => ${res1}`);
//console.log(`TOTAL resultado 2 => ${res2}`);
console.log(`TOTAL resultado 1 => ${multiplicar(4,5,6,3)}`);
console.log(`TOTAL resultado 2 => ${multiplicar(4,5)}`);

function sumar(a,b){
    return a+b;
}
console.log(`Resultado => ${sumar(sumar(3,6),sumar(7,9))}`)

//REalizar una función que dados dos parámetros (a y b)
//CAlcule la multimplicación de ambos sin usar el signo * 
//Solo se puede usar sumas y restas

function multiplicar2(a,b){
    var producto = 0;
    for(let i = 0; i < b; i++){
        producto = producto + b
    }
    return producto;
}
console.log(`Resultado => ${multiplicar2(5,5)}`);


function division(a,b){
    var resultadoDivision = 0;
    return resultadoDivision;
}
console.log(`Resultado => ${division(15,5)}`);


