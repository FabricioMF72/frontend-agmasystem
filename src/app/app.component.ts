import { Component, OnInit } from '@angular/core';
import { SideBarItem } from './models/sideBarItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-agmasystem';
  constructor(){
    console.log("AppComponent constructor");
  }

}
