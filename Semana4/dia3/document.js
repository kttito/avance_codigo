//El objeto sirve para manejar cualquier elemento del DOM
//SELECTORES
//getElementById([id del elemento]);

var div1 = document.getElementById("div1");
console.log(div1);

//getElementByClassName([nombre de la clase del o de los elementos])

var xrojo = document.getElementsByClassName("rojo");
console.log(xrojo);

//getElementsByTagName([Nombre de la etiqueta de los elementos]);
//Obtiene un arreglo de los elementos dado el nombre de la etqueta
var xparrafos = document.getElementsByTagName("div");
console.log(xparrafos);

//querySelector([Selector como en CSS·])
//Obtiene si estariamos usando CSS3

var xiddiv1 = document.querySelector("#div1")
console.log(xiddiv1);

//querySelectorAll([Selector como en CSS3])
//Obtiene un conjunto de elemntos que coinciden con el selector
//como di estaríamos usando CSS3
var xrojos = document.querySelectorAll(".rojo");
console.log(xrojos);




