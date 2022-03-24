import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassaroPageRoutingModule } from './bateria-routing.module';

import { PassaroPage } from './bateria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassaroPageRoutingModule
  ],
  declarations: [PassaroPage]
})
export class PassaroPageModule {}
