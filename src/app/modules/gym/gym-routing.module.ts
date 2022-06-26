import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGymComponent } from './components/add-gym/add-gym.component';
import { GymComponent } from './gym.component';

const routes: Routes = [
  {
    path: '',
    component: GymComponent
  },
  {
    path: 'add',
    component: AddGymComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
