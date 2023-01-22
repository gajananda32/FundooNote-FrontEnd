import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import{HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import{MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import { CreatenotesComponent } from './createnotes/createnotes.component';
import { GetallnotesComponent } from './getallnotes/getallnotes.component';
import { DisplaynoteComponent } from './displaynote/displaynote.component';
import { FormsModule } from '@angular/forms';
//import { IconComponent } from './Components/icon/icon.component'; 
import { MatMenuModule} from '@angular/material/menu';
import { IconComponent } from './icon/icon.component';
import { AuthguardService } from './services/AuthGuardService/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    GetallnotesComponent,
    DisplaynoteComponent,
    IconComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [
    AuthguardService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
