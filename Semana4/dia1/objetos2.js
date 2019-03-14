var mascota = {
    nombre: "Chancho",
    raza: "Bull Terrier",
    nombreCompleto: function(){
        console.log(`El nombre es: ${mascota.nombre}
                    y tiene ${edad} años`);
    },
    nombreYRaza: function(){
        return `Nombre => ${mascota.nombre} Raza=> ${mascota.raza}`
    },
    nuevoNombre: function(name){
        mascota.nombre = name;
    }
}
mascota.nombreCompleto(4);
console.log(mascota.nombreYRaza());
mascota.nuevoNombre("Chanchito")
