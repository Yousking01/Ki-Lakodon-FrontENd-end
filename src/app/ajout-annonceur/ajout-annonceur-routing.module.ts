import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutAnnonceurPage } from './ajout-annonceur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutAnnonceurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutAnnonceurPageRoutingModule {}
