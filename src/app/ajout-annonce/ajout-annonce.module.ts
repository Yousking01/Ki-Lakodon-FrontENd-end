import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutAnnoncePageRoutingModule } from './ajout-annonce-routing.module';

import { AjoutAnnoncePage } from './ajout-annonce.page';
import { AuthInterceptor } from '../_helpers/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutAnnoncePageRoutingModule
  ],
  declarations: [AjoutAnnoncePage],
  providers:[AuthInterceptor]
})
export class AjoutAnnoncePageModule {}
