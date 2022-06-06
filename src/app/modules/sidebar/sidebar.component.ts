import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarItemList!: SideBarItem[];
  constructor() { }

  ngOnInit(): void {
    this.sideBarItemList = [
      { 
        icon: "fa-solid fa-users", title: "Users", link: "/users" 
      },
      {
        icon: "fa-solid fa-calendar-days", title: "Routines", link: "/routines"
      },
      {
        icon: "fa-solid fa-file-invoice-dollar", title: "Invoices", link: "/invoices"
      },
      {
        icon: "fa-solid fa-chart-line", title: "Reports", link: "/reports"
      }
    ];
  }

}
