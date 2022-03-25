import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolPageRoutingModule } from './sol-routing.module';

import { SolPage } from './sol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolPageRoutingModule
  ],
  declarations: [SolPage]
})
export class SolPageModule {}
