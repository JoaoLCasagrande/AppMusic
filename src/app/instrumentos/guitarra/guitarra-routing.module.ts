import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AranhaPage } from './guitarra.page';

const routes: Routes = [
  {
    path: '',
    component: AranhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AranhaPageRoutingModule {}
