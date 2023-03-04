import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupererAnnoncePage } from './recuperer-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: RecupererAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupererAnnoncePageRoutingModule {}
