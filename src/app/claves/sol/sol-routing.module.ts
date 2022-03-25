import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolPage } from './sol.page';

const routes: Routes = [
  {
    path: '',
    component: SolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolPageRoutingModule {}
