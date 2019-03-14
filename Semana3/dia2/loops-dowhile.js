//La única diferencia con la estructura "while" es que do-while.
//ejecuta el codigo or lo menos 1 vez antes de realizar la condició


//contraseña
var cont = 0;
var contrasena;

do{
    contrasena = prompt("Ingrese su contraseña");
    cont++
    if(contrasena === "jajaja"){
        alert("Bienvenido");
        cont = 3;
    }else{
        alert("ERROR, inténtelo nuevamente")
    }

}while(cont < 3)


var pwd = "";