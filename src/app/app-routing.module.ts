import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GYM_ROUTE, ROUTINE_ROUTE, USER_ROUTE } from './modules/core/constants/router.constant';

const routes: Routes = [
  {
    path: USER_ROUTE,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: GYM_ROUTE,
    loadChildren: () => import('./modules/gym/gym.module').then(m => m.GymModule)
  },
  {
    path: ROUTINE_ROUTE,
    loadChildren: () => import('./modules/routine/routine.module').then(m => m.RoutineModule)
  },
  {
    path: '**',
    redirectTo: USER_ROUTE
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
