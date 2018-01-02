import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './container/login/login.component';
import {Router , RouterModule} from '@angular/router' ;
import {LOGIN} from './auth.route';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
RouterModule.forChild(LOGIN)
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
