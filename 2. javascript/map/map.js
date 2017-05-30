//map sirve para transformar el arreglo
let arreglo = [10,8,9,8,9,10]
let usuarios = [{
    nombre: "Carlos" //Sr o Sra
    //fechaCreacion: new Date()
    //anioCreacion: ????
},{
    nombre: "Maria" //Sr o Sra
    //fechaCreacion: new Date()
    //anioCreacion: ?????
}
];
let resultado = arreglo.map((valor,indice)=>{
        return valor/5
    });

console.log(resultado)

let usr = usuarios.map((usuario)=>{
    usuario.nombre = "Sr. o Sra. " + usuario.nombre;
usuario.fechaCreacion = new Date();
usuario.anioCreacion = usuario.fechaCreacion.getFullYear();
return usuario
});

console.log(usr)