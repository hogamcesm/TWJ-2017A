import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componentes/planeta-star-wars/planeta-star-wars.component';
import { OrbitalPeriodComponent } from './componentes/orbital-period/orbital-period.component';
import { ClimateComponent } from './componentes/climate/climate.component';
import { DiameterComponent } from './componentes/diameter/diameter.component';
import { GravityComponent } from './componentes/gravity/gravity.component';
import { TerrainComponent } from './componentes/terrain/terrain.component';

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
    TerrainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //http
  ],
  bootstrap: [InicioComponent]
})
export class AppModule { }
