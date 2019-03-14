//una estrucutra repetitiva es una estrucutra
//que repetirá n veces una porción de código
//for -while - do while
var cont = 34;
//la variabe contador se reinicia en el ciclo for
for(cont = 0; cont < 9; cont++) {
    console.log(`Mensajito ${cont}`);
}

//Programa para hacer tabla de multiplicar
//el usuario ingresa el número
//Usuario ingresa el núnmero límite en el que acaba la tabla


//multiplicar
var base = parseInt(prompt("ingrese el número base"));
var limite = parseInt(prompt("ingrese el límite"));
var cont = 0;
for(cont = 0; cont < limite; cont++){
    console.log(`${cont} x ${base} = ${cont*base}`);
}

//programa para calcular el promedio de N notas
//el USUARIO INGRESA "n"
//el USUARIO INGRESA las "n" de notas
//se debe crear las varaible feura de for
var n = parseInt(prompt("ingrese el número de notas"));
var cont;
var suma = 0;
var nota = 0;
for(cont = 0; cont < n; cont++){
    nota = parseFloat(prompt("Ingrese su nota"));
    suma = suma + nota;
}
console.log(`el promedio es ${suma/n}`);

//