//ITERANDO UN ARREGLO
ejer_07();

function ejer_01(){
    var nombres = ["Jorge","Ximena","Javier","Martha"];
    var saludos = [];
    for(var i=0; i < nombres.length; i++){
        //console.log(nombres[i]);
        //saludos.push("hola" + nombres[i]);
        saludos[i] = "Hola" + nombres[i];
    }
    console.log(saludos);
}

function ejer_02(){
    var apellidos = ["Garnica","Monje","Salinas"];
    var salarios = [3000.00, 7000.00, 2500.00];
    var cargos = ["Gerente","Jefe de proyectos", "Caja"];
    
    for(var i = 0; i < salarios.length; i++){
        alert(`Sr(a) ${apellidos[i]} es ${cargos[i]} y factura ${salarios[i]}`);
    }
}

function ejer_03(){
    var planilla = [["Jorge",3000.00,"Gerente"],
    ["Carlos",3500.00,"Asesoría legal"],
    ["Cecilia",4000.00,"Programadora"]];
    
    for(var i = 0; i < planilla.length; i++){
        alert(`Sr(a) ${planilla[i][0]} factura ${planilla[i][1]} y tiene el cargo de ${planilla[i][2]}`);
    }
}

///MATRIZ
/* function ejer_04(){
    var planilla = [
        [1,2,3],
        [90,45,67,90],
        [80,43,12]                
    ];
    for(var i = 0; i < planilla.length; i++){
        for(var j = 0; j < planilla[i].length; j++){
            console.log(planilla[i][j])
        }
    }
} */

function ejer_04(){
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
function ejer_05(){
    var  ma1 = [
                [6,7,3],
                [9,0,7],
                [9,3,2]
            ];
    var  ma2 = [
                [8,9,4],
                [1,2,8],
                [7,6,5]
            ];
    var m3 = [[],[],[]];
    for(i=0; i < ma1.length; i++){
        for(j=0; j < ma1[i].length; j++){
            m3[i][j] = ma1[i][j] + ma2[i][j];
        }
    }
    console.log(m3);
}

function ejer_06(){
    var  ma1 = [
                [6,7,3],
                [9,0,7],
                [9,3,2]
            ];
    var  ma2 = [
                [8,9,4],
                [1,2,8],
                [7,6,5]
            ];
    var m3 = [];
    for(i=0; i < ma1.length; i++){
        m3[i]=[];
        for(j=0; j < ma1[i].length; j++){
            m3[i][j] = ma1[i][j] + ma2[i][j];
        }
    }
    console.log(m3);
}

function ejer_0(){
    var fila = parseInt(prompt("Ingrese número de filas"));
    var columna = parseInt(prompt("Ingrese número de columnas"));
    var ma1 = [];
    var ma2 = [];
    for(var i = 0; i < fila; i++){
        for(var j = 0; j < columna; j++){
            ma1[i][j]
        }
    }
}


