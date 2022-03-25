import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'trombone',
    loadChildren: () => import('./filmes/trombone/trombone.module').then( m => m.SenhordosaneisPageModule)
  },
  {
    path: 'saxofone',
    loadChildren: () => import('./filmes/saxofone/saxofone.module').then( m => m.GemeaPageModule)
  },
  {
    path: 'bateria',
    loadChildren: () => import('./filmes/bateria/bateria.module').then( m => m.PassaroPageModule)
  },
  {
    path: 'clarinete',
    loadChildren: () => import('./filmes/clarinete/clarinete.module').then( m => m.EspacoPageModule)
  },
  {
    path: 'guitarra',
    loadChildren: () => import('./filmes/guitarra/guitarra.module').then( m => m.AranhaPageModule)
  },  {
    path: 'do',
    loadChildren: () => import('./claves/do/do.module').then( m => m.DoPageModule)
  },
  {
    path: 'fa',
    loadChildren: () => import('./claves/fa/fa.module').then( m => m.FaPageModule)
  },
  {
    path: 'sol',
    loadChildren: () => import('./claves/sol/sol.module').then( m => m.SolPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
