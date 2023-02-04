import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilsitePageRoutingModule } from './profilsite-routing.module';

import { ProfilsitePage } from './profilsite.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilsitePageRoutingModule,
    // NgChartsModule
  ],
  declarations: [ProfilsitePage]
})
export class ProfilsitePageModule {}
