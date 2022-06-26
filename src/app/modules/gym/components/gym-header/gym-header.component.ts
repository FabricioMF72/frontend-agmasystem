import { Component, OnInit } from '@angular/core';
import { ADD_GYM_BUTTON_TEXT, ADD_GYM_ROUTE, GYM_TITLE_TEXT } from 'src/app/modules/core/constants/gym.constant';

@Component({
  selector: 'app-gym-header',
  templateUrl: './gym-header.component.html',
  styleUrls: ['./gym-header.component.scss']
})
export class GymHeaderComponent implements OnInit {
  gymTitleText: string = GYM_TITLE_TEXT;
  addGymButtonText: string = ADD_GYM_BUTTON_TEXT;
  addGymRoute: string = ADD_GYM_ROUTE;
  constructor() { }
  ngOnInit(): void {
  }

}
