import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../_helpers/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profilsite/:id',
        loadChildren: () => import('../profilsite/profilsite.module').then( m => m.ProfilsitePageModule),
        // canLoad:[AuthGuardService]
      },
      {
        path: 'profilannonceur/:id',
        loadChildren: () => import('../profilannonceur/profilannonceur.module').then( m => m.ProfilannonceurPageModule),
        // canLoad:[AuthGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule),
        // canLoad:[AuthGuardService]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
