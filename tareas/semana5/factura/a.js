window.addEventListener("load",function(){

    var Nombre = document.getElementById("Nombre");
    var Ruc = document.getElementById("RUC");
    var DateR = document.getElementById("Date");
    var Cant = document.getElementById("Cant");
    var Descr = document.getElementById("Descripcion");
    var Categoria = document.getElementById("Categoria");
    var Punit = document.getElementById("Punit");
    var BotonI = document.getElementById("botonI");
    var BotonF = document.getElementById("botonF");
    var tBody = document.getElementById("tBody");
    var tabla=document.getElementById("tab");
    var Total=0;
    var cont = 0;    
    var fin=false;
    var contP=0;
    var Factura={
        Nombre: Nombre,
        RUC:Ruc,
        Fecha:DateR,
        Productos:[]
    }



    function  bloquear(){
        var vacio;
        if(Nombre.value == "" || Ruc.value == "" || DateR.value ==""){
            alert("Faltan datos de la Factura")
            vacio=true;
        }else{
            Nombre.readOnly = true;
            DateR.readOnly = true;
            Ruc.readOnly = true;
            vacio=false;
        }
        return vacio;
    }

    BotonI.addEventListener("click",function(){
        
        if(bloquear()==true || fin==true){
            return;
        }
        var CantV = Cant.value;
        var DescrV = Descr.value;
        var CategoriaV = Categoria.value;
        var PunitV = Punit.value;
        if(CantV == "" || DescrV == "" || PunitV == ""){
            alert("Faltan datos del Producto");
            return;
        }
        var subTotal=CantV*PunitV;
        cont++;
        var lista = [cont,CantV,DescrV,PunitV,subTotal];
        let tr = document.createElement("tr");
        Total=Total+subTotal;
        for (let i = 0; i < lista.length; i++) {
            let td = document.createElement("td");
            td.innerHTML=lista[i];
            tr.appendChild(td);
        }
        Cant.value="";
        Descr.value="";
        Punit.value="";
        tBody.appendChild(tr);
    });

    BotonF.addEventListener("click",function(){
        if(bloquear()==true || fin==true){
            cont--;
            return;
        }
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = "Total";
        td1.colSpan="4";
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = Total;
        tr.appendChild(td2);
        tabla.appendChild(tr);
        fin=true;
    });

    
    
    


    











});