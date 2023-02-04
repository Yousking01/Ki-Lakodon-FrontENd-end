import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutSitePageRoutingModule } from './ajout-site-routing.module';

import { AjoutSitePage } from './ajout-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutSitePageRoutingModule
  ],
  declarations: [AjoutSitePage]
})
export class AjoutSitePageModule {}
