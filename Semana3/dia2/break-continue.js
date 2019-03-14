// la sentencia Break irrumpe el bloque en el que se encuentra, no importa cuantas iteraciones resten por ejecut
//tarse. break, termina u omite todas ellas.
//continue irrumple en el ciclo en el que se encuentra omite las 
//instrucciones de la iteración actual y apsa a la sgt iteaciñon

/* var rpta="";
while(true){
    alert("/////////MENU/////////\n 1.- Fecha actual \n 2.- Imprimir saludo \n 3.- Terminar el programa \n //////FIN");
    rpta = prompt(`/////////MENU/////////
                1.- Fecha actual
                2.- Imprimir saludo
                3.- Terminar el programa
                //////FIN///////////
                Ingrese opción`)
    if(rpta == 3){
        brea;
    }
    if(rpta == 1){
        alert(`LA fecha actual es ${new Date()}`);
    }
    if(rpta == 3){
        break;
    }
} */

/* for(var i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(`El valor de i => ${i}`);
} */

/* for(var i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
    console.log(`El valor de i => ${i}`);
} */

//operador ternario => resume en un l.inea la ejecución
//de un if y un else que tengan una sola sentencia
//

var x = 8;
/* if(x==8){
    console.log(`x es igual a ${x}`);
}else {
    console.log(`x no es igual a ${x}`)
} */

//********* */
x==8 ? console.log("x = 8") : console.log("x != 8");