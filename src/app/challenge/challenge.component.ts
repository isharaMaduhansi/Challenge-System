import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor() { }

  availableColors: ChipColor[] = [
    {name: 'Java', color: 'accent'},
    {name: 'Python', color: 'accent'},
    {name: 'C++', color: 'accent'},
    {name: 'Andriod', color: 'accent'},
    {name: 'HTML', color: 'accent'},
    {name: 'CSS', color: 'accent'},
    {name: 'PHP', color: 'accent'},
    {name: 'Java script', color: 'accent'},
    {name: 'Angular', color: 'accent'},
    {name: 'JQuery', color: 'accent'},
    {name: 'Ajex', color: 'accent'},
    {name: 'Flutter', color: 'accent'},
    
  ];

  ngOnInit(): void {
  }

}
