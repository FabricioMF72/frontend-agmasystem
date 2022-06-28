import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SubHeaderComponent
  ]
})
export class SharedModule { }
