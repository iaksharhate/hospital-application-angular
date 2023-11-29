import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path:'', redirectTo: 'dashboard', pathMatch:'full' },
  { path:'dashboard', component:DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
