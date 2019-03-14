
//Ejercicio 1
/* var nro1 = +prompt("Ingrese el primer número");
var nro2 = +prompt("Ingrese el segundo número");
if(nro1 > nro2){
    alert(`La suma es: ${nro1 + nro2}`);
    alert(`La resta es: ${nro1 - nro2}`);
}else if(nro1 < nro2){
    alert(`El producto es: ${nro1 * nro2}`);
    alert(`La division es: ${nro1 / nro2}`);
} */

//Ejercicio 2
/* var numero = +prompt("Ingrese un número positivo con uno o dos digitos");
if(numero <=9 && numero>=0){
    alert("Este número tiene un digito")
}else if (numero <=99 && numero>=10){
    alert("Este número tienes dos digitos");
}else if(numero < 0){
    alert("ERROR, no es un número positivo");
}else{
    alert("ERROR, no está dentro del rango");
} */

//Ejercicio 3
/* var nroPostNegt = +prompt("Ingrese un número");
if(nroPostNegt >= 0){
    alert("Es un número postivo");
} else {
    alert("Es un número negativo");
} */
    
//Ejercicio 4
/* var numeroAlfabeto = +prompt("Ingrese un número");
switch(true){
    case numeroAlfabeto == 1:
    alert("Es una vocal");
    break;
    case numeroAlfabeto == 5:
    alert("Es una vocal");
    break;
    case numeroAlfabeto == 9:
    alert("Es una vocal");
    break;
    case numeroAlfabeto == 15:
    alert("Es una vocal");
    break;
    case numeroAlfabeto == 21:
    alert("Es una vocal");
    break;
    case numeroAlfabeto >=2 && numeroAlfabeto <=4:
    alert("Es una letra");
    break;
    case numeroAlfabeto >=6 && numeroAlfabeto <=8:
    alert("Es una letra");
    break;
    case numeroAlfabeto >=10 && numeroAlfabeto <=14:
    alert("Es una letra");
    break;
    case numeroAlfabeto >=16 && numeroAlfabeto <=26:
    alert("Es una letra");
    break;
    case numeroAlfabeto >=27 || numeroAlfabeto<=0:
    alert("ERROR no está dentro del rango");
    break;
} */

//el mismo ejercicio4 usando if
/* var nroAlf = +prompt("Ingrese un número");
if(nroAlf == 1 || nroAlf == 5 || nroAlf == 9 || nroAlf == 15 || nroAlf == 21){
    alert("Es una vocal");
} else if(nroAlf >=2 && nroAlf <=4 || nroAlf >=6 && nroAlf <=8 || nroAlf >=10 && nroAlf <=14 || nroAlf >=16 && nroAlf <=26){
    alert("Es una letra"); 
} else {
    alert("ERROR no está dentro del rango");
} */

//Ejercicio 5
/* var nroTabla = parseInt(prompt("Ingrese un número base del 1 al 9"));
var limite = parseInt(prompt("Ingrese el límite"));
var cont = 0;
if(nroTabla <=9 && nroTabla >=1){
    for(cont = 1; cont < limite; cont++){
        alert(`${cont} x ${nroTabla} = ${cont*nroTabla}`);
    }  
} */

//Ejercicio 6
/* var nroDiaSemana = parseInt(prompt("Ingrese un número del día de la semana"));
if(nroDiaSemana == 1){
    alert(`Es lunes`);
}else if(nroDiaSemana == 2){
    alert(`Es martes`);
}else if(nroDiaSemana == 3){
    alert(`Es miércoles`);
}else if(nroDiaSemana == 4){
    alert(`Es jueves`);
}else if(nroDiaSemana == 5){
    alert(`Es viernes`);
}else if(nroDiaSemana == 6){
    alert(`Es sábado`);
}else if(nroDiaSemana == 7){
    alert(`Es domingo`);
}else{
    alert(`ERROR, no está dentro del parámetro`);
} */

//Ejercicio 7



