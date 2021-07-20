import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';



//TODO: (1) add admin as a route, (2) make admin component 'protected'. Users that are not logged are not supposed to be able to access it.
const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]}, {path: 'login', component: LoginComponent}, { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
