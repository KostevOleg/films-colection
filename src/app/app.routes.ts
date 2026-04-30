import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: "",
    loadComponent: ()=>import('./features/films/pages/film-list/film-list').then((m)=>m.FilmListComponent)
  },
  {
    path : 'about',
    loadComponent: ()=> import('./features/about/about').then((m)=>m.AboutComponent)
  },
  {
    path: 'film/:id',
    loadComponent: ()=> import('./features/films/pages/film-details/film-details').then((m)=>m.FilmDetailsComponent)
  },
  {
    path : '**',
    loadComponent : () => import('./features/not-found/not-found').then((m)=>m.NotFoundComponent)
  }
];
