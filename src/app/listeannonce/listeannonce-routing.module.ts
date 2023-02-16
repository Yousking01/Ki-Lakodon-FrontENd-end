import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeannoncePage } from './listeannonce.page';

const routes: Routes = [
  {
    path: '',
    component: ListeannoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeannoncePageRoutingModule {}
