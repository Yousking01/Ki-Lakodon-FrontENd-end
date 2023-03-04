import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolegestionPageRoutingModule } from './rolegestion-routing.module';

import { RolegestionPage } from './rolegestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolegestionPageRoutingModule
  ],
  declarations: [RolegestionPage]
})
export class RolegestionPageModule {}
