import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ALL_STATUS } from 'src/app/modules/core/constants/user.constant';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  userList!: User[];
  userSubscription$!: Subscription;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    const userObservable$ = this.userService.getUserList();
    this.userSubscription$ = userObservable$.subscribe((userList: User[]) => this.userList = userList);
    this.userService.filterUsersByStatus(ALL_STATUS);
    console.log(this.userList)
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.userSubscription$.unsubscribe();
  }
}
