import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-ajout-site',
  templateUrl: './ajout-site.page.html',
  styleUrls: ['./ajout-site.page.scss'],
})
export class AjoutSitePage implements OnInit {
  nomsitepopulaire: string="";
  URL: string="";
  image: string="";
  username: string="";
  email: string="";
  password: string="";

  ListeSite: any;
  

  constructor(public alertController: AlertController, private ajoutsiteService: AjoutsiteService,private tokenStorage: TokenStorageService,private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });
    
  }
  resetforme(){
    this.nomsitepopulaire = '';
    this.URL = '';
    // this.budgetannonce ='';
    this.image = '';
    this.username= '';
    this.email='';
    this.password='';
    // this.dateDebut = '';
    // this.dateFin = '';
    // this.idannonceur = 0;
    // this.idsitepopulaire = 0;
  }

    //reload Page
    // reloadPage() {
    //   window.location.reload();
    // }

  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }

  async ajoutsite(){
    this.ajoutsiteService.ajoutsite(this.nomsitepopulaire,this.URL, this.image,this.username,this.email,this.password).subscribe(data =>{
      console.log(data);
    })
    const alert = await this.alertController.create({
      header: 'Site_Web ajoutée',
      message: 'Votre Site_Web a été ajoutée avec succès.',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.router.navigate(['/ajout-site']);
        }
      }]
      
    });

    await alert.present();

    // location.reload();
    //Faire disparaitre le contenu du input
    this.resetforme();
  }
  // async opennotif() {
  //   const popup = await this.pvrCtlr.create({
  //     component: NotificationComponent,
  //   });
  //   popup.present();
  // }

  logout(): void {
    this.tokenStorage.clearToken();
    this.router.navigate(['/connexion']);
  }
}
