import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';
import { SIDEBAR_ITEM_LIST } from '../core/constants/sideBar.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarItemList!: SideBarItem[];
  constructor() { }

  ngOnInit(): void {
    this.sideBarItemList = SIDEBAR_ITEM_LIST
  }

}
