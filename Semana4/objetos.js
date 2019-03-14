//DEFINIENDO UN OBJETO CON PROPIEDADES
var primeraPersona = {
    nombre: "Jorge",
    edad: 27,
    dni: 343543565
};
console.log(`nombre => ${primeraPersona.nombre}`);
console.log(`edad => ${primeraPersona.edad}`);
console.log(`DNI => ${primeraPersona.dni}`);

//MODIFICANDO UNA DE LAS PROPIEDADES DEÑ PBJETO
primeraPersona.nombre = "Luis";
console.log(`nombre => ${primeraPersona.nombre}`);
console.log(`edad => ${primeraPersona.edad}`);
console.log(`DNI => ${primeraPersona.dni}`);

//CREANDO UN OBJETO CON OBJETOS COMO CONTENIDO
var vehiculo = {
    placa: "V5R-674",
    marca: "Land Rover",
    color: {
        color1: "Marron",
        color2: "Tierra"
    },
    propietarios: [
        {
            nombre: "Jorge",
            fecha: 2015,
        },
        {
            nombre: "Daniel",
            fecha: 2018
        }
    ]
};
console.log(vehiculo.color.color2);
for(let i = 0; i < vehiculo.propietarios.length; i++){
    console.log(`el dueño ${vehiculo.propietarios[i].nombre}`);
    console.log(`el dueño ${vehiculo.propietarios[i].fecha}`);
}
