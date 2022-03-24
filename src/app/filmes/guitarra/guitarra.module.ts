import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AranhaPageRoutingModule } from './guitarra-routing.module';

import { AranhaPage } from './guitarra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AranhaPageRoutingModule
  ],
  declarations: [AranhaPage]
})
export class AranhaPageModule {}
