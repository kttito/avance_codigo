//Creando un objeto Fecha
var fecha = new Date();
document.write(`<p>Fecha actual ${fecha}</p>`);

var fecha2 = new Date('March 1 2019');
document.write(`<p>Fecha custom ${fecha2}</p>`);

var fecha3 = new Date(2019, 10, 10, 14, 55, 00);
document.write(`<p>Fecha custom ${fecha3}</p>`);

var navidad = new Date(2000,12,25)
var resto = fecha-navidad ;
var segundos = resto / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
var semanas = dias / 7;
var meses = semamas / 4;
var anios = meses / 12;
document.write(`<p>Días que faltan para Navidad ${anios}</p>`);


