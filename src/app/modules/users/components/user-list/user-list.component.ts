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
    this.userList = this.userService.getUserList();
  }

}
