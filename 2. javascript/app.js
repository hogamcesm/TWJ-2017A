console.log('ASDXYZ');
var carlos = {
    nombre: "Carlos",
    apellido: "Sampedro",

    fecha: new Date(),
    fn : function () {
        console.log( this.nombre + " " +  this.apellido );
    },
    anio: function () {
        return this.fecha.getFullYear();
    },
    diferenciaEdad: function ( edadAComparar ) {
        var r = edadAComparar - this.fecha.getFullYear();
        return Math.abs(r);
    }
};




 carlos.fn();
console.log(  carlos.anio() );

console.log(  carlos.diferenciaEdad( 2018 ) );