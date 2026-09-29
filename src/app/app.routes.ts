import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Event } from './event/event';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'event',
    loadComponent: () => import('./event/event').then((m) => m.Event),
  },
];
