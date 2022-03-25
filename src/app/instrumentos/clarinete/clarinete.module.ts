import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspacoPageRoutingModule } from './clarinete-routing.module';

import { EspacoPage } from './clarinete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspacoPageRoutingModule
  ],
  declarations: [EspacoPage]
})
export class EspacoPageModule {}
