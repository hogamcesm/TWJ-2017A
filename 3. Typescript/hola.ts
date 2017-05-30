/**
 * Created by USRDEL on 16/5/17.
 */
console.log( "Hola Mundo" );

let str = `
Hola



<p> Mundo</p>

`;

console.log(str);




//boolean
let soltero:boolean = false; //true
//numbers
let decimal:number = 0.91;

let frasetion:string = "You are done";
let aanotherFrasetion:string = ` ${ decimal }`;


let notas:number[] = [1,2,3,34]; //[]
let jaladas:Array<number> = [1,2,3] //[]

let nombre:any = "asd";
nombre = 21;

let usuario: UsuarioLogin = {
    nombre: "carlos",
    apellido: "sampedro",
    direccion: "Av. asd "
};


interface UsuarioLogin {
    nombre: string,
    apellido: string,
    direccion?: string
}

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
class Persona {
    nombre:string;
     apellido:string;
    fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
    }

    //imprimirPersona(){
    //    console.log( this.nombre, this.apellido, this.fechaNacimiento);

    //}

    public imprimirPersona():UsuarioLogin{
        console.log( this.nombre, this.apellido, this.fechaNacimiento);
        this.imprimirNombre(this.nombre, this.apellido);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        }

    }

    private imprimirNombre ( nombre?:string,
                             apellido?:string):void{
        if( apellido ){
            console.log( nombre,apellido );
        }else{
            console.log( nombre );
        }
    }
}


function SumarNumeros ( numero1:number,
                        numero2:number):number{
    return numero1 + numero2;
}




 let carlos:Persona = new Persona(  );


carlos.nombre = "Carlos";
carlos.apellido = "Sampedro";
carlos.fechaNacimiento = new Date();
console.log( carlos.nombre, carlos.fechaNacimiento );

carlos.imprimirPersona();