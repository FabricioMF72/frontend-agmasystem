import { Component, OnInit } from '@angular/core';
import { ADD_GYM_BUTTON_TEXT, ADD_GYM_ROUTE, GYM_TITLE_TEXT } from '../core/constants/gym.constant';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {
  gymTitleText: string = GYM_TITLE_TEXT;
  addGymButtonText: string = ADD_GYM_BUTTON_TEXT;
  addGymRoute: string = ADD_GYM_ROUTE;
  constructor() { }

  ngOnInit(): void {
  }

}
