//WINDOW => Representa al navegador
//BOM browser object mdel
//funcion location => onbitne la ruta actual de la url
document.write(window.location);
var url = window.location + "";
if(url.indexOf("window.html") != -1){
    console.log("Estás en window.html");   
}else {
    console.log("No sstás en window.html");
}

document.write(`<p>Ancho de la ventana ${window.innerWidth}</p>`);
document.write(`<p>Alto de la ventana${window.innerHeight}</p>`);
document.write(`<p>Obtener el desplazamento den navvegador del eje x ${window.scrollX}</p>`);
document.write(`<p>Obtener el desplazamento den navvegador del eje y ${window.scrollY}</p>`);

//document.write(`<p>${}</p>`);
//setTimeOut(función, milisegundos)
//Ejecuta la funcion tras ka cantidad de milisegundos que 
//es una funcion asincrona

setTimeout( function(){
    alert("han pasado 5 segundos")
}, 5000);

//setInterval(function, milosegundos)
//Ejecuta la función cada cantidad de milisegundos
setInterval(function(){
    console.log((new Date ()));
    
},500);

//clear interval
//recibe una instancia de SetInterval