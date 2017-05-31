import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Carlos";

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
  }
  cargarPlanetas(){
    this._http
      .get( "http://swapi.co/api/planets" )
      //.map( response=>response.json() )
      .subscribe(
        (response)=>{
            console.log("Response", response);
            console.log( response.json() );

            let respuesta = response.json();

            console.log( "respuesta",respuesta.next );

          this.planetas = respuesta.results;



        },
        (error)=>{
console.log("error", error)
        },
        ()=>{
          console.log("Finally")
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
}

interface PlanetasStarWars{
    name: string,
    rotation_period: string,
    orbital_period: string,

}
