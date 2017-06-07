import { Component, Input, OnInit } from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  @Input() planeta:PlanetasStarWars;
  constructor() { }

  ngOnInit() {
  }

}
