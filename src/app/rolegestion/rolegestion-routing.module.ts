import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolegestionPage } from './rolegestion.page';

const routes: Routes = [
  {
    path: '',
    component: RolegestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolegestionPageRoutingModule {}
