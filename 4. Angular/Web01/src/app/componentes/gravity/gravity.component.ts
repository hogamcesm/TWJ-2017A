import { Component, Input, OnInit } from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-gravity',
  templateUrl: './gravity.component.html',
  styleUrls: ['./gravity.component.css']
})
export class GravityComponent implements OnInit {
  @Input() gravity:string;
  constructor() { }

  ngOnInit() {
  }

}
