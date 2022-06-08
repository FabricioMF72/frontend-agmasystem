import { Component, OnInit } from '@angular/core';
import { FILTER_LABEL_TEXT, FILTER_LIST_ITEMS, ORDER_LABEL_TEXT, ORDER_LIST_ITEMS, SEARCH_LABEL_TEXT } from 'src/app/modules/core/constants/user.constant';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  filterList = FILTER_LIST_ITEMS;
  filterLabelText = FILTER_LABEL_TEXT;
  orderList = ORDER_LIST_ITEMS;
  orderLabelText = ORDER_LABEL_TEXT;
  searchLabelText = SEARCH_LABEL_TEXT;

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
