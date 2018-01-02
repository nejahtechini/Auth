import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { router } from './app.route';
import {Router , RouterModule} from '@angular/router';
// import { LoginComponent } from './auth/container/login/login.component';
// import { LoginFormComponent } from './auth/login-form/login-form.component' ;


@NgModule({
  declarations: [
    AppComponent
    // LoginComponent,
    // LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
