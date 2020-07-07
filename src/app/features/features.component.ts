import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'Computer programming is defined as a process of developing and implementing various set of instructions given to the computer to perform a certain predefined task. Computer Programming is easy if it is appropriately managed. There are many computer programming languages available so finalizing the right language is not an easy task.', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Computer programming is a set of written instructions that the computer follows. These instructions can be written in various languages. Each programming languages have their unique ways of organizing the commands which are called syntax.', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Multiple programming languages can help you solve the same programming problem. However, you need to select a language that you feel is relevant to perform your task.', cols: 1, rows: 1, color: 'lightpink'},
    {text: ' Expected software system response time, a number of simultaneous users, security, maintains, compatibility with web, mobile, devices are few other factors to consider while choosing a language.', cols: 2, rows: 1, color: 'lightyellow'},
  ];
}
