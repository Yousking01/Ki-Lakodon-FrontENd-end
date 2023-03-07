import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilannonceurPageRoutingModule } from './profilannonceur-routing.module';

import { ProfilannonceurPage } from './profilannonceur.page';
// import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilannonceurPageRoutingModule,
    // NgChartsModule
  ],
  declarations: [ProfilannonceurPage]
})
export class ProfilannonceurPageModule {}
