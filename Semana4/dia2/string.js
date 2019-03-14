/* var cadena = "Tecsup Pasión por la tecnología";
document.write(`<p>Longitud de la cadena = ${cadena.length}</p>`);
document.write(`<p>Caracter en la posición 5 = ${cadena.charAt(5)}</p>`);
document.write(`<p>Cadena en mayúsculas = ${cadena.toUpperCase()}</p>`);
document.write(`<p>Cadena en minúsculas = ${cadena.toLowerCase()}</p>`);
var arreglo = cadena.split(" ");
document.write(`<p>Convertir la cadena en una arreglo de n elementos dado un separador ${arreglo}</p>`);
console.log(arreglo);
document.write(`<p>Obtener la primera posición de un caracter/subacadena de una cadena ${cadena.indexOf("a")}</p>`);
document.write(`<p></p>`)
document.write(`<p>Quita los espacios en blanco ${cadena.trim()}</p>`)
document.write(`<p>Reemplaza la primera ocurrencia de un caraster/cadena por otro ${cadena.replace("e","E")}</p>`);
document.write(`<p>Extraer una subcadena de la cadena ${cadena.slice(5,8)}</p>`) */

//EJERCICIOS
//1. Algoritmo para mostrar la cantidad
var vocales = prompt("Ingrese una palabra");
var contVocales = 0;
for(var i=0;i<vocales.length;i++){
    var vo = vocales.charAt(i);
    if(vo == "a" ||vo ==  "A" ||vo ==  "e" ||vo ==  "E" ||vo ==  "i" ||vo ==  "I" ||vo ==  "o" ||vo ==  "O" ||vo ==  "u" ||vo ==  "U"){
        contVocales++;      
    }
    
}
alert(`El número de vocales es ${contVocales}`);

function invertirCadena(){
    var palabra = prompt("Ingrese una palabra");
    for(var i = palabra; i>=palabra.length; i--){
        
        
    }

}


function capitalizarFrase(){
    var frase = prompt("Ingrese una palabra");
    for(i=0; i<frase.length;i++){
        
    }
    
    
    frase.replaceAt(0,"G");
}

