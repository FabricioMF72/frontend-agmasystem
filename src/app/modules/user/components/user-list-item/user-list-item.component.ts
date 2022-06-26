import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user! : User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onClickDeleteUser(user:User){
    this.userService.deleteUser(user.id);
    console.log(this.userService.getUserList())
  }

  onClickUpdateUser(user:User){
    this.userService.updateUser(user);
  }
}
