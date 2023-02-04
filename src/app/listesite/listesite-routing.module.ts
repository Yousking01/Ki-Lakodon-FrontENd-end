import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListesitePage } from './listesite.page';

const routes: Routes = [
  {
    path: '',
    component: ListesitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListesitePageRoutingModule {}
