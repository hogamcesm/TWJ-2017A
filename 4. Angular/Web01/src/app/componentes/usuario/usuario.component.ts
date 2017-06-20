import {Component, Input, OnInit} from '@angular/core';
import {UsuarioClass} from '../../Classes/UsuarioClass';
import {Http} from '@angular/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
@Input() usuario: UsuarioClass;
  constructor(private _http: Http) { }

  ngOnInit() {

    console.log(this.usuario);
  }
  actualizarUsuario(usuario:UsuarioClass, nombre:string){
    let actualizacion = {
      nombre: usuario.nombre
    };
    this._http.put(
      "http://localhost:1337/Usuario/"+usuario.id, actualizacion)
      .map((res)=>{
        return res.json();
      }).subscribe(
      res=>{
        //el servidor dice q se actualizo
        console.log("El usuario de actualizo",res);

        //let indice = this.usuarios.indexOf(usuario);
        //this.usuarios[indice].nombre = nombre;
        //this.usuarios[indice].editar = !this.usuarios[indice].editar;
      },
      err=>{
        //hubo algun problema
        console.log("Hubo un error");
      }
    )
  }
  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    // console.log('Indice:', this.usuarios.indexOf(usuario));

    console.log('Indice con index: ', usuario.id);



    this._http.delete(`http://localhost:1337/Usuario/${usuario.id}`)
      .subscribe(
        respuesta => {
          console.log('Indice con index: ', usuario.id);

          //  const rjson: UsuarioClass[] = respuesta.json();
          //  this.usuarios = rjson.slice(usuario.id);
          // this.usuarios = this.usuarios.slice(usuario.id);

          let usuarioBorrado;
          usuarioBorrado = respuesta.json();
          //this.usuarios = this.usuarios.filter(value => usuarioBorrado.id != value.id);


        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
