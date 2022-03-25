import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspacoPage } from './clarinete.page';

const routes: Routes = [
  {
    path: '',
    component: EspacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspacoPageRoutingModule {}
