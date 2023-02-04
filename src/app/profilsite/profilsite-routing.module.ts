import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilsitePage } from './profilsite.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilsitePageRoutingModule {}
