import { Component, Input, OnInit } from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  @Input() climate:string;
  constructor() { }

  ngOnInit() {
  }

}
