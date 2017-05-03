var dos = 2;
var tres = 3;

console.log( dos );
console.log( tres );

var dosPuntoCinco = 2.5;

console.log( dosPuntoCinco );

var verdadero = true;
var falso = false;
var negativo = -1;
var fechaNacimiento = new Date( );
var cuatroStr = '4';

cuatroStr = 4;
cuatroStr = false;
cuatroStr = true;
cuatroStr = new Date( );
cuatroStr = undefined;
cuatroStr = null;

var variable;

console.log( variable );
console.log( cuatroStr );

//

var numero2 = 2;

console.log( typeof numero2 );

//OBJETOS JSON

var carlos = {
    id: 1,
    nombre: 'Carlos',
    createdAt: new Date( ),
    updatedAt: new Date( ),
    casado: false,
    prestamos: false,
    hijos: undefined,
    altura: 1.65,
    negativo: -20,
    mascota: {
        nombre: 'asd',
        fechaNacimiento: new Date( ),
    }
};

console.log( carlos, "Hola", 1, 2, 3 );


console.log( carlos.mascota.fechaNacimiento );
console.log( "Altura", carlos.altura );
carlos.altura = 1.70;
console.log( "Altura", carlos.altura );

carlos.altura = {
    ancho: 2.5,
    alto: 1.67
};

delete carlos.altura;
console.log( "Objeto", carlos );

carlos.juegos = "asda";

console.log( "Objeto", carlos );

var arreglo = [
    1,
    "str",
    2.4,
    true,
    false,
    null,
    undefined,
    new Date( ),
    -28.23,
    {
        a: "b"
    }];

var nuevoObjeto = {
    papas: ['chola', 'chaucha', 'maria'],
    cebollas: ['paitena', 'perla', 'blanca']
}


var matriz = [[0,1],[2,3]];

console.log( matriz[0][0] );


var arregloDeObjetos = [
    {
        id: 1,
        nombre: "Adrian"
    },
    {
        id: 2,
        nombre: "felipe"
    }
];


console.log("antes:", arregloDeObjetos );
arregloDeObjetos.splice( 0,1 );
console.log("despues:", arregloDeObjetos );

arregloDeObjetos.splice( 0,0, { id: 3, nombre: "Carmen" } );

console.log("despues 2:", arregloDeObjetos );












