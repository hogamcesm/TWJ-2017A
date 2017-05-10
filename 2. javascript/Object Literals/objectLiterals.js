//Object Literals

var nuevaFuncion = (nombre,apellido)=>{
    var usuario1 = {
        nombre:nombre,
        apellido
    };

    // alert("Hola "+usuario1.nombre+" "+usuario1.apellido);

    var usuario2 = {
        nombre,
        apellido:apellido
    };
    console.log(usuario2.nombre);
}

nuevaFuncion("Carlos","Sampedro");