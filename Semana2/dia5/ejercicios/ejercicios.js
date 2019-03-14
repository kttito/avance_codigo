var n = parseInt(prompt("Ingrese el número de ventas"));
var M1000 = 0, tM1000 = 0;
var M500 = 0, tM500 = 0;
var m500 = 0, tm500 = 0;
var monto = 0;
var totalGlobal = 0;

for(var cont = 0; cont < n; cont++){
    monto = parseFloat(prompt(`Ingrese el monto ${cont+1}`));
    switch(true){
        case monto > 1000:{
            //M1000 = M1000 +1;
            M1000++;
            tM1000 = tM1000 + monto;
            break;
        }
        case monto > 500 && mono <= 1000:
             M500++;
             tM500 = tM500 + monto;
            break;
        case monto <= 500 && monto > 0:
             m500++;
             tm500 = tm500 + monto;
             break;
        default:
        alert(`El valor ${monto}, es incorrecto`);
        cont--;
    }
}
totalGlobal = tM1000 + tM500 + tm500;
console.log(`Total de ventas <= 500 ---------${tm500}`);
console.log(`Cantidad de ventas <= 500 ---------${m500}`);

console.log(`Total de ventas >500 y < 1000 ---------${tM500}`);
console.log(`Cantidad de ventas >500 y < 1000 ---------${M500}`);

console.log(`Total de ventas > 1000 ---------${M1000}`);
console.log(`Cantidad de ventas > 1000 ---------${tM1000}`);

console.log(`Total vendido => ${totalGlobal}`);