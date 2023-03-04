import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'profilsite',
  //   loadChildren: () => import('./profilsite/profilsite.module').then( m => m.ProfilsitePageModule)
  // },
  // {
  //   path: 'profilannonceur',
  //   loadChildren: () => import('./profilannonceur/profilannonceur.module').then( m => m.ProfilannonceurPageModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./ajout-annonce/ajout-annonce.module').then( m => m.AjoutAnnoncePageModule)
  },
  {
    path: 'ajout-site',
    loadChildren: () => import('./ajout-site/ajout-site.module').then( m => m.AjoutSitePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'listesite',
    loadChildren: () => import('./listesite/listesite.module').then( m => m.ListesitePageModule)
  },
  {
    path: 'password-success-full',
    loadChildren: () => import('./password-success-full/password-success-full.module').then( m => m.PasswordSuccessFullPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'board-admin',
    loadChildren: () => import('./board-admin/board-admin.module').then( m => m.BoardAdminPageModule)
  },
  {
    path: 'listeannonce',
    loadChildren: () => import('./listeannonce/listeannonce.module').then( m => m.ListeannoncePageModule)
  },
  {
    path: 'sendmail',
    loadChildren: () => import('./sendmail/sendmail.module').then( m => m.SendmailPageModule)
  },
  {
    path: 'debut',
    loadChildren: () => import('./debut/debut.module').then( m => m.DebutPageModule)
  },
  {
    path: 'rolegestion',
    loadChildren: () => import('./rolegestion/rolegestion.module').then( m => m.RolegestionPageModule)
  },
  {
    path: 'recuperer-annonce',
    loadChildren: () => import('./recuperer-annonce/recuperer-annonce.module').then( m => m.RecupererAnnoncePageModule)
  },
  {
    path: 'ajout-annonceur',
    loadChildren: () => import('./ajout-annonceur/ajout-annonceur.module').then( m => m.AjoutAnnonceurPageModule)
  },
  // {
  //   path: 'debut',
  //   loadChildren: () => import('./debut/debut.module').then( m => m.DebutPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
