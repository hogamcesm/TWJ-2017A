import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Carlos";

  /* command + alt, seleccionar todo el texto, command + alt + l*/
  arregloUsuarios = [{
    nombre: "Carlos",
    apellido: "Sampedro",
    conectado: true
  }, {
    nombre: "Mashi",
    apellido: "Correa",
    conectado: false
  }, {
    nombre: "Abdala",
    apellido: "Bucaram",
    conectado: true
  }];

  constructor() {
  }

  ngOnInit() {

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
