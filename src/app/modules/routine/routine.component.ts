import { Component, OnInit } from '@angular/core';
import { ADD_ROUTINE_BUTTON_TEXT, ADD_ROUTINE_ROUTE, ROUTINE_TITLE_TEXT } from '../core/constants/routine.constant';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {
  routineTitleText: string = ROUTINE_TITLE_TEXT;
  addRoutineButtonText: string = ADD_ROUTINE_BUTTON_TEXT;
  addRoutineRoute: string = ADD_ROUTINE_ROUTE;
  constructor() { }

  ngOnInit(): void {
  }

}
