import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemeaPageRoutingModule } from './saxofone-routing.module';

import { GemeaPage } from './saxofone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemeaPageRoutingModule
  ],
  declarations: [GemeaPage]
})
export class GemeaPageModule {}
