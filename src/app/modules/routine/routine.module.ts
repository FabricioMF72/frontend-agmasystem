import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutineRoutingModule } from './routine-routing.module';
import { RoutineComponent } from './routine.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RoutineComponent,
  ],
  imports: [
    CommonModule,
    RoutineRoutingModule,
    SharedModule
  ]
})
export class RoutineModule { }
