import { Component, OnInit } from '@angular/core';
import { ADD_USER_BUTTON_TEXT, ADD_USER_ROUTE, USER_TITLE_TEXT } from 'src/app/modules/core/constants/user.constant';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  
  userListLength:number = 0;
  userTitleText:string = USER_TITLE_TEXT; 
  addUserButtonText:string = ADD_USER_BUTTON_TEXT;
  addUserRoute:string = ADD_USER_ROUTE;
  constructor() { }

  ngOnInit(): void {
  }

}
