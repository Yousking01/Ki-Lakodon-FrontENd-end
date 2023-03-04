import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupererAnnoncePageRoutingModule } from './recuperer-annonce-routing.module';

import { RecupererAnnoncePage } from './recuperer-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupererAnnoncePageRoutingModule
  ],
  declarations: [RecupererAnnoncePage]
})
export class RecupererAnnoncePageModule {}
