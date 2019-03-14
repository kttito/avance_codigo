//Existe una jerarquía 
//SINTAXIS DE OBJETOS
//Acceso a una propiedad:
//document.bgColor = 'red';
//document.forms[0].action;
//document.forms[0].campo.value
//Acceso a un método:
//document.body.createElement('p');
//document.body.appendChild(nuevoParrafo);
var h1 = document.getElementById("titulo");
console.log(h1.innerHTML);

h1.innerHTML = "Soy un nuevo texto";

//h1.style.color = "blue";

h1.onmouseover = function(){
    mouseOver()
};

h1.onmouseout = function(){
    mouseOut()
};

function mouseOver2(){
    style.color = "yellow";
}
function mouseOut2(){
    style.color = "blue"

}

var p = document.getElementById("parrafo");
console.log(parrafo.innerHTML);

//parrafo.style.color = "olive";
//pparrafo.style.fontStyle = "italic";
parrafo.innerHTML = "Soy un nuevo párrafo";


var boton = document.getElementById("boton");
p = mouseOver2;

boton.onclick = mouseOut2;







