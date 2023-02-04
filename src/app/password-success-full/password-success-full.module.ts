import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSuccessFullPageRoutingModule } from './password-success-full-routing.module';

import { PasswordSuccessFullPage } from './password-success-full.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSuccessFullPageRoutingModule
  ],
  declarations: [PasswordSuccessFullPage]
})
export class PasswordSuccessFullPageModule {}
