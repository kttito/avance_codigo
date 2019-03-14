/* var persona = [];
persona["nombre"] = "Jorge";
persona["edad"] = 27;
persona["dni"] = 473343434;
console.log(` el nombre es ${persona["nombre"]}`); */

//n personas
function numeroPersonas(){
    var personas = [];
    var nPersonas = prompt("Ingrese número de personas: ");
    
    for(let i = 0; i < nPersonas; i++){
        var persona = [];
        persona["nombre"] = prompt("Ingrese el nombre");
        persona["edad"] = +prompt("Ingrese la edad");
        persona["dni"] = +prompt("Ingrese su dni");
        personas.push(persona);
        //var menor = personas["edad"];

    }
    var personaMayor = [0, "sin_nombre"];
    var personaMenor = 300;
    for(let i = 0; i < personas.length; i++){
       if(personaMayor[0]<personas[i]["edad"]){
           personaMayor[0] = personas[i]["edad"];
           personaMayor[1] = personas[i]["nombre"]
       }if(personaMenor[0] > personas[i]["edad"]){
           personaMenor[0] = personas[i]["edad"];
           personaMenor[1] = personas[i]["nombre"]
       }
       
    }
    console.log(`Este es el menor ${personaMenor[0]} y nombre${[1]}`);
    console.log(`Este es el mayor ${personaMayor[0]} y nombre${[1]}`);
    

}

numeroPersonas();

