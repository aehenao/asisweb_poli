import { Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { LoginComponent } from './web/login/login.component';
import { RegisterComponent } from './web/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'panel',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegisterComponent
    },
   
];
