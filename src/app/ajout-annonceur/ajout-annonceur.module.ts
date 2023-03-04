import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutAnnonceurPageRoutingModule } from './ajout-annonceur-routing.module';

import { AjoutAnnonceurPage } from './ajout-annonceur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutAnnonceurPageRoutingModule
  ],
  declarations: [AjoutAnnonceurPage]
})
export class AjoutAnnonceurPageModule {}
