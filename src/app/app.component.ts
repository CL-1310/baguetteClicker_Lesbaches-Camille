import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title:string;
  copyrightYear:number;
  copyrightName:string;

  constructor() {
    this.title = "Camille";
    this.copyrightYear = 2023;
    this.copyrightName = "Camille Lesbaches";
  }

  ngOnInit(): void {}
}



