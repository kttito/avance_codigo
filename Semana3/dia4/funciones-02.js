//funcion que no recibe ni devuelve parámetro
function miFuncion(){

}
miFuncion();

//función que recibe patámetros pero no devuelve valor
function potencia(base, exponente){
    let resultado = base ** exponente;
    console.log(`El exponente es ${resultado}`);
}
potencia(2,4);
potencia(5,3);
potencia(8,3);

function spread(arreglo){
    console.log(arreglo);
}
var x = [1,2,3];
spread(x);