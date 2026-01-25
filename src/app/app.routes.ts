import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hire', loadChildren: () => import('./pages/hire/hire.routes').then(m => m.HIRE_ROUTES) },
  { path: 'learn', loadChildren: () => import('./pages/learn/learn.routes').then(m => m.LEARN_ROUTES) },
  { path: '**', redirectTo: '' }
];
