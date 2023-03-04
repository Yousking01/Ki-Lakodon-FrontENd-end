import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-ajout-annonceur',
  templateUrl: './ajout-annonceur.page.html',
  styleUrls: ['./ajout-annonceur.page.scss'],
})
export class AjoutAnnonceurPage implements OnInit {
  username: string="";
  email: string="";
  password: string="";
  
  adrresseannonceur: string="";
  numeroannonceur: string="";
  budgetannonceur: string="";
  idKilakodon?: number;

  // image: string="";


  constructor(public alertController: AlertController,private ajouteservice : AjoutServiceService,private tokenStorage: TokenStorageService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  async ajoutannonceur(){
    // this.ajouteservice.ajoutannonceur(this.username,this.email, this.password,this.adrresseannonceur,this.numeroannonceur,this.budgetannonceur)
    this.ajouteservice.ajoutannonceur(this.username,this.email,this.password,this.adrresseannonceur,this.numeroannonceur,this.budgetannonceur,1).subscribe(data =>{
      // console.log("kilakodon=======",);
      console.log(data);
    })
    const alert = await this.alertController.create({
      header: 'Site_Web ajoutée',
      message: 'Votre Site_Web a été ajoutée avec succès.',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.router.navigate(['/connexion']);
        }
      }]
      
    });
    await alert.present();
}

  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  // recupereImage(event:any){
  //   this.image = event.target["files"][0];
  //   console.log(this.image)
  // }
  

  

logout(): void {
  this.tokenStorage.clearToken();
  this.router.navigate(['/connexion']);
}

}
