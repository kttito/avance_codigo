var xdiv1 = document.getElementById("div1");
//mdificar estilos
//elemento.style.[estilo];
xdiv1.style.color = "#ff8821";
xdiv1.style.padding = "10px";
xdiv1.style.border = "1px solid red";
xdiv1.style.opacity = "0.9";

//Si un estilo en css tiene una sola palabra
//EJM 'border'. en JavaScript
//es un elemento.style.border
//si un estilo en css toenes mas de una plabra
//EJM 'background-image', en JS
//es un elemento.backgroundImage

//OTRAS PROPIEDADES DE LOS ELEMENTOS
//clientWidth = obtiene el ancho del elemento
console.log(`Anho del div ${xdiv1.clientWidth}`);
//clientWidth = obtiene el alto del elemento
console.log(`Alto del div ${xdiv1.clientHeight}`);
//offsetTop = cantidad de píxeles de desplazo desde el techo de su contendor
console.log(`Offset Top ${xdiv1.offsetTop}`);
//offsetLeft = cantidad de pixeles de desplazo dela izquierda de su contenedor
console.log(`Offset Left ${xdiv1.offsetLeft}`);
//classmate => devuelve o settea o asigna el nombre de la clase
// que tiene el elemento
console.log(`Clase del Div => ${xdiv1.className}`)
//classList =>devuelve un arreglo con las clases del elemento
console.log(xdiv1.classList);
//add([nombre_de_clase])=> agregar una clase al elemeto
xdiv1.classList.add("celeste");
//classList.remove([nombre_de_clase])=> elimina de una clase al elemento
xdiv1.classList.remove("celeste");
//classListcontains([nombre_de_la_clase])=> devuelve true o false
//depediendo de si contiene la clase dada.
console.log(xdiv1.classList.contains("rojo"));
//classList.toogle([nombre_de_clase])=> si el lemeto
//tiene el nombre del a clase, borra la clase, si np ña tiene la agrega
setInterval(function(){
    xdiv1.classList.toggle("rojo");
    xdiv1.classList.toggle("cursiva");
},500);

//MODIFICANDO SU CONTENIDO 
//innerHTML => Declara o devuelve el contenido
console.log(xdiv1.innerHTML);
xdiv1.innerHTML = "CLICK AQUÍ PARA GANAR DINERO "




