import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserHeaderComponent,
    UserListItemComponent,
    UserMenuComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
