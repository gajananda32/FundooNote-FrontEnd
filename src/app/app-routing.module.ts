import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatenotesComponent } from './createnotes/createnotes.component';
import { GetallnotesComponent } from './getallnotes/getallnotes.component';
import { AuthenticationGuard } from './AuthGuard/authentication.guard';

const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:'full'},
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'resetpassword',
    component:ResetPasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:'notes',component:GetallnotesComponent}
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
