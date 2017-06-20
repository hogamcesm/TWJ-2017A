import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


import {PlanetasStarWars} from '../../Interfaces/PlanetaStarWars';
import {UsuarioClass} from '../../Classes/UsuarioClass';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

})
export class InicioComponent implements OnInit {



  nombre = 'Carlos';

  usuarios: UsuarioClass[]= [];

  nuevoUsuario: UsuarioClass = new UsuarioClass();


  planetas: PlanetasStarWars[] = [];



/* command + alt, seleccionar todo el texto, command + alt + l*/
  arregloUsuarios = [{
    nombre: 'Carlos',
    apellido: 'Sampedro',
    conectado: true
  }, {
    nombre: 'Mashi',
    apellido: 'Correa',
    conectado: true
  }, {
    nombre: 'Abdala',
    apellido: 'Bucaram',
    conectado: false
  }, {
    nombre: 'Jose',
    apellido: 'Flores',
    conectado: true
  }];

  constructor( private _http: Http ) {

    //se inicia la clase
    // pero el componente no eta listo
  }

  ngOnInit() {
    //el componente esta listo


    console.log( 'Nuevo usuario', this.nuevoUsuario );

    this._http.get('http://localhost:1337/Usuario')
      .subscribe(
        respuesta => {
          const rjson: UsuarioClass[] = respuesta.json();
          this.usuarios = rjson.map(
            (usuario: UsuarioClass)=>{
              //cambiar el usuario
              usuario.editar = false;
              return usuario;
            }
          );
          console.log('Usuarios', this.usuarios);
        },
        error => {
          console.log('Error', error);
    }
      );

  }




  cargarPlanetas(){
    this._http
      .get('http://swapi.co/api/planets')
      //.map(response=>response.json()
      .subscribe(
        (response) => {
          console.log('Response:', response);

          console.log(response.json());

          const respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;


          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenURL = '/assets/imagenes/' + planeta.name + '.jpg';
              return planeta;
            }
          );
          //Arreglo
          // mutarlo, mismo arreglo con un nuevo atributo imagen

          //.map


        },
        (error) => {
          console.log('Error:', error);
        },
        () => {
          console.log('Finally');
        }

      );
  }


  cambiarNombre(): void {

    console.log('Entro');
    this.nombre = 'Rafico a Lenin';
  }

  cambiarOtroNombre() {
    this.nombre = 'Lenin a Rafico';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    console.log(nombreEtiqueta.value);

    this.nombre = nombreEtiqueta.value;

  }





  crearUsuario(){
    console.log('Entro a crear Usuario');

  /*  let usuario = {
      nombre:this.nuevoUsuario.nombre
    };
    */


    this._http.post('http://localhost:1337/Usuario/', this.nuevoUsuario)
      .subscribe(
        respuesta => {
          // const respuestaJSON = respuesta.json();
          // console.log('Resouesta JSoN', respuestaJSON);
          //this.usuarios.push(this.nuevoUsuario);

          //this.usuarios.splice(respuesta.json());
          let usuarioAgregado;
          usuarioAgregado = respuesta.json();

          this.usuarios.push(usuarioAgregado);
          this.nuevoUsuario = {};


    },
    error => {
          console.log('Error', error);
    }
      );

  }

  eliminarUsuario(usuario:UsuarioClass){
    let indice = this.usuarios.indexOf(usuario);
    this.usuarios.slice(1, usuario.id);
  }


}
