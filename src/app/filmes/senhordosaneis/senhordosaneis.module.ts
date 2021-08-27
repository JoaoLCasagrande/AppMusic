import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhordosaneisPageRoutingModule } from './senhordosaneis-routing.module';

import { SenhordosaneisPage } from './senhordosaneis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhordosaneisPageRoutingModule
  ],
  declarations: [SenhordosaneisPage]
})
export class SenhordosaneisPageModule {}
