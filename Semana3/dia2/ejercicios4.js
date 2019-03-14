er02_ElNaufrago();
//4.1 Salario
function salarioProfesor(){
    var salInicial = 1500;
    var salRecibido = 0;  
    for(var anio = 0; anio < 6; anio++) {
        salInicial = salInicial+(salInicial*0.1);
        salRecibido = salRecibido + salInicial;
        console.log(`Este es el saldo inicial ${salInicial}`);
        console.log(`Este es monto total por 6 años ${salRecibido}`)
    }
    console.log(`Este es monto total por 6 años ${salRecibido}`);
} 

//4.2 Hamburguesas 
function hamburguesas(){
    var tipoHamburguesas = prompt("Ingrese el tipo de hamburguesa que desea: S - D - T");
    var numeroHamburguesas = +prompt("Ingrese cuántas hamburguesas llevará: ");
    var tarjetaPago = prompt("Si paga con tarjeta ingrese Y de lo contrario N");
    var montoTotal = 0;
    if(tipoHamburguesas == "S" || tipoHamburguesas =="s"){
        montoTotal = numeroHamburguesas * 20;
        
        if(tarjetaPago== "y" || tarjetaPago=="Y"){
            montoTotal = (numeroHamburguesas * 20)+ montoTotal*0.05;
            alert(`el precio a pagar es: ${montoTotal}`);
        }else{
            alert(`el precio a pagar es: ${montoTotal}`);
        }
        
    }else if(tipoHamburguesas == "D" || tipoHamburguesas =="d"){
        montoTotal = numeroHamburguesas * 25;

        if(tarjetaPago == "Y" || tarjetaPago == "y"){
            montoTotal = (numeroHamburguesas * 25) + montoTotal*0.05;
            alert(`el precio a pagar es: ${montoTotal}`);
        }else{
            alert(`el precio a pagar es: ${montoTotal}`);
        }
        
    }else if(tipoHamburguesas == "T" || tipoHamburguesas =="t"){
        montoTotal = numeroHamburguesas * 28;
        
        if(tarjetaPago == "Y" || tarjetaPago == "y"){
            montoTotal = (numeroHamburguesas * 28) + montoTotal*0.05;
            alert(`el precio a pagar es: ${montoTotal}`);
        }else{
            alert(`el precio a pagar es: ${montoTotal}`);
        }
        
    }else{
        alert("ERROR, no existe ese tipo de hamburguesas");
    }
    
}

//4.3
function nroCero(){

    var cantidadVeces = +prompt("Ingrese cantidad de números a revisar: ");
    var positivos = 0, negativos = 0, ceros = 0;

    for(var i = 0; i < cantidadVeces; i++){
    var nro = parseInt(+prompt(`Ingrese número ${i+1}`));
        if(nro > 0){
            positivos++; 
        }else if(nro < 0){
            negativos++;
            //negativos = negativos+1;
        }else if(nro == 0){
            ceros++;
        }
        
    }
    
    alert(`Cantidad de postivos ${positivos}\n Cantidad de negativos ${negativos}\n Cantidad de ceros ${ceros}`);
    //alert("Numeros negativos: "+negativos+"\nNumeros Positivos: "+positivos+"\nNumero de ceros: "+ceros);
    
}

//4.4
function fabricaFocos(){
    var focos = 0;
    var focosRojos = parseInt(+prompt("Ingrese cuantos focos rojos hay "));
    var focosVerdes = parseInt(+prompt("Ingrese cuantos focos verdes hay "));
    var focosBlancos = parseInt(+prompt("Ingrese cuantos focos blancos hay "));
    for(var i = 0; i < focos; i++){
        if(focos == focosRojos){
            focosRojos++;
        }else if(focos == focosVerdes){
            focosVerdes++;
        }else if(focos == focosBlancos){
            focosBlancos++;
        }
    }
    alert(`Total de focos ${focosRojos+focosBlancos+focosVerdes}\n Cantidad de focos rojos es: ${focosRojos}\n Cantidad de focos verdes es: ${focosVerdes}\n Cantidad de focos verdes es: ${focosBlancos}`);
    
}
//4.5
function ahorroPersona(){
    var totalAhorrado = 0;
    var totalDias = 365;
    for(var i = 0; i < totalDias; i++){
        totalAhorrado = totalDias % 3 == 0;
        //totalAhorrado++
        console.log(totalAhorrado);
    }
    alert(totalAhorrado);

}

function er02_ElNaufrago(){
    var num_h = parseInt(prompt("Ingrese numero de hamburguesas que desea comprar : "));
    var tipo_h;
    var total=0;
    for (let i = 0; i < num_h; i++) {
        tipo_h = prompt("Ingrese tipo de hamburguesa"+(i+1)+" (S/D/T): ");
        if(tipo_h=="s" || tipo_h=="S"){
            total = total + 20;
        }else if(tipo_h=="d" || tipo_h=="D"){
            total = total + 25;
        }else if(tipo_h=="t" || tipo_h=="T"){
            total = total + 28;
        }else{
            i--;
            alert("invalido");
        }
    }
    var tarjeta = prompt("Costo total de hamburguesas : "+total+"\nDesea pagar con tarjeta?(Y/N):"); 
    if(tarjeta=="y" || tarjeta=="Y"){
        alert("Costo total mas descuento: "+(total-(total*0.05)));
    }else{
        alert("Costo total: "+(total));
    }
};








