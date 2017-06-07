import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {PlanetasStarWars} from '../../Interfaces/PlanetaStarWars';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Carlos";


  nuevoUsuario: UsuarioClass = new UsuarioClass("");


  planetas: PlanetasStarWars[] = [];



/* command + alt, seleccionar todo el texto, command + alt + l*/
  arregloUsuarios = [{
    nombre: "Carlos",
    apellido: "Sampedro",
    conectado: true
  }, {
    nombre: "Mashi",
    apellido: "Correa",
    conectado: true
  }, {
    nombre: "Abdala",
    apellido: "Bucaram",
    conectado: false
  }, {
    nombre: "Jose",
    apellido: "Flores",
    conectado: true
  }];

  constructor( private _http: Http ) {

    //se inicia la clase
    // pero el componente no eta listo
  }

  ngOnInit() {
    //el componente esta listo


    console.log( "Nuevo usuario", this.nuevoUsuario );
  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;


          this.planetas = this.planetas.map(
            (planeta)=>{
              planeta.imagenURL = "/assets/imagenes/"+planeta.name+".jpg";
              return planeta
            }
          );
          //Arreglo
          // mutarlo, mismo arreglo con un nuevo atributo imagen

          //.map


        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }


  cambiarNombre(): void {

    console.log("Entro");
    this.nombre = "Rafico a Lenin";
  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    console.log(nombreEtiqueta.value);

    this.nombre = nombreEtiqueta.value;

  }

  crearUsuario(){
    console.log("entro a crear usuario");
    let usuario:UsuarioClass = {
      nombre:this.nuevoUsuario.nombre
    };
    this._http.post("http://localhost:1337/Usuario",usuario)
      .subscribe(
        respuesta=>{
          let respuestaJSON = respuesta.json();
          console.log("Resouesta JSoN", respuestaJSON);
    },
    error=>{
          console.log("Error",error);
    }
      )
  }
}

class UsuarioClass {
  nombre: string;
  constructor( nombre?:string ){
    this.nombre = nombre;
  }


}


