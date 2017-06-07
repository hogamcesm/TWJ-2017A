import { Component, Input,  OnInit } from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-orbital-period',
  templateUrl: './orbital-period.component.html',
  styleUrls: ['./orbital-period.component.css']
})
export class OrbitalPeriodComponent implements OnInit {
  @Input() planeta:PlanetasStarWars;
  constructor() { console.log("Orbital period:", this.planeta ) }

  ngOnInit() {

    console.log("Orbital period:", this.planeta )

  }

}
