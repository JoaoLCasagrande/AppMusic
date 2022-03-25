import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassaroPage } from './bateria.page';

const routes: Routes = [
  {
    path: '',
    component: PassaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassaroPageRoutingModule {}
