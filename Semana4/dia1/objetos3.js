var clasemascota = function(){
    var mascota = {
        nombre: "Chancho",
        raza: "Bull Terrier",
        edad: 2,
        nombreCompleto: function(){
            console.log(`El nombre es: ${mascota.nombre}
                        y tiene ${edad} años`);
        },
        nombreYRaza: function(){
            return `Nombre => ${mascota.nombre} Raza=> ${mascota.raza}`;
        },
        nuevoNombre: function(name){
            mascota.nombre = name;
        },
    };

    return mascota;
};

var fido = clasemascota();
var lucas = clasemascota();
var chancho = clasemascota();
var lobo = clasemascota();
var chizu = clasemascota();

fido.nuevoNombre("FIDO");
lucas.nuevoNombre("LUCAS");
chizu.nuevoNombre("Chizu");

console.log(fido.nombreYRaza());
console.log(lucas.nombreYRaza());
console.log(chizu.nombreYRaza());

