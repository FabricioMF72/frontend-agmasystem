import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ADD_USER_BUTTON_TEXT, ADD_USER_ROUTE, ALL_STATUS, USER_TITLE_TEXT } from 'src/app/modules/core/constants/user.constant';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  userListLength: number = 0;
  userTitleText: string = USER_TITLE_TEXT;
  addUserButtonText: string = ADD_USER_BUTTON_TEXT;
  addUserRoute: string = ADD_USER_ROUTE;
  userList!: User[];
  userSubscription$!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userObservable$ = this.userService.getUserList();
    this.userSubscription$ = userObservable$.subscribe((userList: User[]) => {
      this.userList = userList
      this.userListLength = userList.length;
    }
    );
    this.userService.filterUsersByStatus(ALL_STATUS);
    console.log(this.userList)
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.userSubscription$.unsubscribe();
  }

}
