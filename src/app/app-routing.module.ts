import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/gurds/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'store'
  },
  {
    path: 'store',
    loadChildren: () => import('./modules/store/store.module').then((m) => m.StoreModule),
    canActivate: [authGuard]
  },
  {
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
