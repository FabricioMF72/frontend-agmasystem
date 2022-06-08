import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  filterList = [
    {
      name: 'All',
      value: 'all'
    },
    {
      name: 'Active',
      value: 'active'
    },
    {
      name: 'Inactive',
      value: 'inactive'
    },
    {
      name: 'Pending',
      value: 'pending'
    }
  ]
  orderList = [
    {
      name: 'Name',
      value: 'name'
    },
    {
      name: 'Status',
      value: 'status'
    },
    {
      name: 'Date',
      value: 'date'
    },
    {
      name: 'Oldest User',
      value: 'oldest'
    },
    {
      name: 'Newest User',
      value: 'newest'
    }
  ]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onChangeFilterByStatus(status:any){
    this.userService.filterUsersByStatus(status.target.value)
    console.log(status.target.value)
  }

  onChangeOrder(order:any){
    console.log(order.target.value)
  }
}
