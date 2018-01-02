import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/auth/auth.module#AuthModule',
        pathMatch: 'full'
    }
];