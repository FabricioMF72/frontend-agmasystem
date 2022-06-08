import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList!: User[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    const userObservable$ = this.userService.getUserList();
    userObservable$.subscribe((userList: User[]) => this.userList = userList);
    this.userService.filterUsersByStatus('all');
    console.log(this.userList)
  }

}
