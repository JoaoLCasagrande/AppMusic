import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhordosaneisPage } from './trombone.page';

const routes: Routes = [
  {
    path: '',
    component: SenhordosaneisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhordosaneisPageRoutingModule {}
