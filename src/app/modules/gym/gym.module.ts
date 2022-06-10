import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym.component';
import { GymHeaderComponent } from './components/gym-header/gym-header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GymComponent,
    GymHeaderComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    SharedModule
  ]
})
export class GymModule { }
