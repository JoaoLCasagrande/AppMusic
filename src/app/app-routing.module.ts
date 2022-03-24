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
    path: 'gemea',
    loadChildren: () => import('./filmes/gemea/gemea.module').then( m => m.GemeaPageModule)
  },
  {
    path: 'passaro',
    loadChildren: () => import('./filmes/bateria/bateria.module').then( m => m.PassaroPageModule)
  },
  {
    path: 'espaco',
    loadChildren: () => import('./filmes/espaco/espaco.module').then( m => m.EspacoPageModule)
  },
  {
    path: 'aranha',
    loadChildren: () => import('./filmes/aranha/aranha.module').then( m => m.AranhaPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
