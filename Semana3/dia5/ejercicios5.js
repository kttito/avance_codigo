ejer_09();
function ejer_0(){
    var planilla = [
        [1,2,3, 67],
        [90,45,67,90],
        [80,43,12]                
    ];
    for(i = 0; i < planilla.length; i++){
        for(j = 0; j < planilla[i].length; j++)
        console.log(planilla[i][j])
    }
}

function ejer_0(){
    var ma = [
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7],
        [1,2,3,67,2,3,7,2,3,67,3,7]               
    ];
    for(var i = 0; i < ma.length; i++){
        for(var j = 0; j < ma[i].length; j++){
          ma[i][j]
        }
    }
console.log(ma)
}

function ejer_09(){
    var ma1 = [];
    var texto="";
    for(var i = 0; i < 15; i++){
        ma1[i] = [];
        texto="";
        for(var j = 0; j < 12; j++){
        var nro = parseInt(prompt(`Ingresa el número en la posición ${i}x${j}`))
        ma1[i][j] = nro 
        texto=texto+ma1[i][j]+" ";
        }
        console.log(texto);
        
    }
    var menor;
    var suma= 0;
    var negativo = 0;
    for(var i = 0; i < 15; i++){
        for(var j = 0; j < 6; j++){
            if(ma1[i][j]<ma1[i][j+1]){
                menor = ma1[i][j]
            } else {
                menor = ma1[i][j+1]
            }
        } 
    }
    for(var i = 5; i < 15; i++){
        for(var j = 0; j < 12; j++){
            suma = suma + ma1[i][j]
        } 
    }
    for(var i = 5; i < 9; i++){
        for(var j = 0; j < 12; j++){
            if(ma1[i][j]=0){
                negativo = negativo++
            }
        } 
    }
console.log(`El menor de los elementos es ${menor}`)
console.log(`La suma de los elementos es ${suma}`)
console.log(`Negativos ${negativo}`)
}