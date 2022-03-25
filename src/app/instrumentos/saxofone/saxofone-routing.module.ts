import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemeaPage } from './saxofone.page';

const routes: Routes = [
  {
    path: '',
    component: GemeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemeaPageRoutingModule {}
