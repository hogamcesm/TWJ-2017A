import { Component, Input, OnInit } from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-diameter',
  templateUrl: './diameter.component.html',
  styleUrls: ['./diameter.component.css']
})
export class DiameterComponent implements OnInit {
  @Input() diameter:string;
  constructor() { }

  ngOnInit() {
  }

}
