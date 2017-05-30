
//void

function HolaMundo( ){
    console.log( "Hola Mundo" );
};

HolaMundo( );

function doble( number ){
    return number*2;
}

console.log( doble(3) );//6

function multiplicar( a, b ) {
    return a*b;
}

console.log( multiplicar( 3, 4) ); //12

var dos  = multiplicar( 1, 2 );
var multiplicar = multiplicar; //guardar la definicion de la funcion



console.log( multiplicar( 4,5 ) );
//funciones anonimas
//void
var hola = function ( ) {
  console.log( "Hello" );//undefined
};

console.log( hola() );

var result = hola();

console.log( result ); //undefined

console.log( "hola: ",hola );

function hazAlgo( algo ) {
           algo();
}

console.log(hazAlgo(function () {
    console.log("dsadas")
}));


function transformarNumero( numero, transformacion ) {
    transformacion( numero );
}

transformarNumero(5, function ( numero ) {
    return numero*2;
});
transformarNumero(10, function ( numero ) {
    return numero/2;
});













