import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeannoncePageRoutingModule } from './listeannonce-routing.module';

import { ListeannoncePage } from './listeannonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeannoncePageRoutingModule
  ],
  declarations: [ListeannoncePage]
})
export class ListeannoncePageModule {}
