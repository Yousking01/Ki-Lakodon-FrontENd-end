import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutSitePage } from './ajout-site.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutSitePageRoutingModule {}
