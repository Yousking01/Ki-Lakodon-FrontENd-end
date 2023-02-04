import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListesitePageRoutingModule } from './listesite-routing.module';

import { ListesitePage } from './listesite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListesitePageRoutingModule
  ],
  declarations: [ListesitePage]
})
export class ListesitePageModule {}
