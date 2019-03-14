function miFuncion(n1,n2, otraFuncion){
    console.log(`Número n1 => ${n1}`);
    console.log(`Número n2 => ${n2}`);
    otraFuncion(9);
}
miFuncion(3,7, function (x) {
    console.log(`Hola soy un callback con ${x}`);
});

function busquedaDB(nombre, callback){
    let nombres = ['Karla','Gabriela','Ximena'];
    for(let i=0;i<nombre.length;i++){
        if(nombre[i]===nombre){
            callback(true,i);
        }
        callback(false, 1);
    }
    callback('Karla',nombres);
    //si no lo encuentra
    callback(false, -1);
    //si lo encuentra
    callback(true, posicion)
}
miFuncion();