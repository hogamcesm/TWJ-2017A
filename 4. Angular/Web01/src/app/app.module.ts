import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componentes/planeta-star-wars/planeta-star-wars.component';
import { OrbitalPeriodComponent } from './componentes/orbital-period/orbital-period.component';
import { ClimateComponent } from './componentes/climate/climate.component';
import { DiameterComponent } from './componentes/diameter/diameter.component';
import { GravityComponent } from './componentes/gravity/gravity.component';
import { TerrainComponent } from './componentes/terrain/terrain.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import {ModuloDeRutas} from './routes';
import { Pagina21Component } from './componentes/pagina21/pagina21.component';
import { Pagina22Component } from './componentes/pagina22/pagina22.component';
import { Pagina23Component } from './componentes/pagina23/pagina23.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    OrbitalPeriodComponent,
    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    TerrainComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas,
    NgbModule.forRoot(),
  ],
  providers: [
    //http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
