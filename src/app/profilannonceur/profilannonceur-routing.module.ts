import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilannonceurPage } from './profilannonceur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilannonceurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilannonceurPageRoutingModule {}
