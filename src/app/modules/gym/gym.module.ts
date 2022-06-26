import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym.component';
import { GymHeaderComponent } from './components/gym-header/gym-header.component';
import { SharedModule } from '../shared/shared.module';
import { GymListComponent } from './components/gym-list/gym-list.component';
import { GymListItemComponent } from './components/gym-list-item/gym-list-item.component';
import { AddGymComponent } from './components/add-gym/add-gym.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GymComponent,
    GymHeaderComponent,
    GymListComponent,
    GymListItemComponent,
    AddGymComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GymModule { }
