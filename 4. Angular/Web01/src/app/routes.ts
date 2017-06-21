import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {Pagina2Component} from "./componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./componentes/pagina21/pagina21.component";
import {Pagina22Component} from "./componentes/pagina22/pagina22.component";
import {Pagina23Component} from "./componentes/pagina23/pagina23.component";

export const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21/:idPartes",
        component:Pagina21Component
      },
      {
        path:"pagina22/:idCompetencias",
        component:Pagina22Component
      },
      {
        path:"pagina23/:idDuenios",
        component:Pagina23Component
      }
    ]
  }
];
export const ModuloDeRutas: ModuleWithProviders =
  RouterModule.forRoot(routes);
