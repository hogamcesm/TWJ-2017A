import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html'
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: UsuarioInt = {
    nombre: "",
    apellido: "Sampedro"
  };

  url:string = "https://angular.io";
  img:string="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/images/common/persona-icons-itengineering@2x.jpg";
  img2:string="http://static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png";
  parrafo = "asdsadasdasdsadas";
  background: string = "lightgreen";
  width: string = "80px";
  height: string = "70px";




  constructor(){
    //console.log("Constructor");
    //this.holaMundo();
    //console.log(this.saludar(this.usuario.nombre,
     // this.usuario.apellido));
    this.usuario.nombre = "Carlos";
    setTimeout(()=>{
      this.usuario.nombre = "Eduardo"
    },3000)
  }

  holaMundo(){
    console.log("Hola Mundo");
  }
  saludar( nombre:string, apellido?:string):string{
    return `Hola ${nombre} ${apellido}!`;
  }
}

interface UsuarioInt {
  nombre: string ,
  apellido: string
}
