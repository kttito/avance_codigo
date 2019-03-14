var person = function (nomb, ed, doc, pso, alt){
    var persona = {
        nombre: nomb,
        edad: ed,
        dni: doc,
        peso: pso,
        altura: alt,
        MayorDeEdad: function(){
            if(ed>17){
                alert("Es mayor de edad");
            } else {
                alert("Es manor de edad");
            }
        },
        toString: function(){
            alert(`nombre: ${nomb}\n edad: ${ed}\n DNI: ${doc}\n peso ${pso}\n altura`);
        },
        indiceMasaCorporal: function(){
            var indice=(this.peso)(this.altura**2);
            alert(`Índice de masa corporal de ${this.nombre} es de: ${indice}`);
        }
    };
    return persona;
}
var Marisol =person("Marisol",50,"Female",60,1.55);
Marisol.mayorDeEdad();
Marisol.toString();
Marisol.indiceMasaCorporal();

var  electrodomestico = function (precioBase, color, consumo, peso){
    var licuadora = {
        precioBase: precioBase,
        color: color,
        consumo: consumo,
        peso: peso,
        categoriaComsumo: function(){
            

        },
        tamanio: function(){
            
        },
        precioFinal: function(){

        }
    };
}

var serie = function (titulo, nroTemporada, alquilado, genero, creador){
    var stranger = {
        titulo: titulo,
        nroTemporada:[{
            
        },
    {

    }],
        alquilado: alquilado,
        genero: genero,
        creador: creador,
        toString: function(){
            console.log(`titulo ${titulo}\n Temporadas ${nroTemporada}\n descripción ${descripcion}`);
        },
        alquilar: function(){

        },
        verInfoDeTemporada: function(){
            nroTemporada = +prompt("Ingrese número de temporada");
        }
    };
}

