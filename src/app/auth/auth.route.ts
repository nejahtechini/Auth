import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './container/login/login.component';

export const LOGIN: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];