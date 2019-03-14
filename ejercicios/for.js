
/* var suma = 0;
for(var i = 2; i <= 10; i++){
    if(i % 2 != 0){ 
        //suma+=i;
        suma = suma + i;
        console.log(i);
    }
}
 console.log(`suma ${suma} `);   */


var numeroInicial = parseInt(prompt("Ingrese un número inicial"));
var cont = 1;
for(var i = 0; i < numeroInicial; i++){
    for(var j = 0; j < numeroInicial; j++){
        console.log(`${cont}\n`);
        cont++;
    }
}





