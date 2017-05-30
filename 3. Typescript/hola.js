/**
 * Created by USRDEL on 16/5/17.
 */
console.log("Hola Mundo");
var str = "\nHola\n\n\n\n<p> Mundo</p>\n\n";
console.log(str);
//boolean
var soltero = false; //true
//numbers
var decimal = 0.91;
var frasetion = "You are done";
var aanotherFrasetion = " " + decimal;
var notas = [1, 2, 3, 34]; //[]
var jaladas = [1, 2, 3]; //[]
var nombre = "asd";
nombre = 21;
var usuario = {
    nombre: "carlos",
    apellido: "sampedro",
    direccion: "Av. asd "
};
/*class Persona {
    nombre:string = "usu";
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}
*/
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    //imprimirPersona(){
    //    console.log( this.nombre, this.apellido, this.fechaNacimiento);
    //}
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido, this.fechaNacimiento);
        this.imprimirNombre(this.nombre, this.apellido);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
var carlos = new Persona();
carlos.nombre = "Carlos";
carlos.apellido = "Sampedro";
carlos.fechaNacimiento = new Date();
console.log(carlos.nombre, carlos.fechaNacimiento);
carlos.imprimirPersona();
