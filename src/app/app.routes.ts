import { Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'panel',
        component: DashboardComponent
    }
];
