import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './forms/formulario.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'forms',
    component: FormularioComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
