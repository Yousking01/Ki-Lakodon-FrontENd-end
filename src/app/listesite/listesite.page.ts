import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listesite',
  templateUrl: './listesite.page.html',
  styleUrls: ['./listesite.page.scss'],
})
export class ListesitePage implements OnInit {
  
  ListeSite: any;
ListeAnnonceur: any;
listSite: any;

  constructor(private router: Router, private route: ActivatedRoute ,private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService,private alertController: AlertController) { }


  ngOnInit() {

    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });

  }


    // //reload Page
    // reloadPage() {
    //   window.location.reload();
    // }
    logout(): void {
      this.tokenStorage.clearToken();
      this.router.navigate(['/connexion']);
    }

    //METHODE PERMETTANT DE SUPRIMER UNE ANNONCE AVEC ID
  async suprimersite(idsitepopulaire: number){
    this.ajoutsiteService.suprimersite(idsitepopulaire).subscribe(data => {
      console.log(data);
    })
    // this.showDeleteSuccessPopup();
     // Affichage d'un message de confirmation
    const alert = await this.alertController.create({
      header: 'Suppression réussie',
      message: 'Votre élément a été supprimé avec succès.',
      buttons: ['OK']
    });

    await alert.present();

  // // Attente de 2 secondes
  // setTimeout(() => {
  //   // Actualiser la page
  // // window.location.reload();
  //   // Rechargement de la page
  //   // window.location.hash = "/listesite";
  // }, 3000);
}

  //MODIFIER
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'Veilliez remplir tout les champ pour une bonne modification !!!';
  // name: string;
  nomsitepopulaire : string="";
  URL : string= "";
  image: string="";
  // idannonceur: number= 0;
  idsitepopulaire:number=0;
  // dateFin: string = "";
  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  ajoutsite() {
    this.modal.dismiss(this.nomsitepopulaire, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Salut, ${ev.detail.data}!`;
    }
  }
   async modifiersite(idsitepopulaire: number){
    this.ajoutsiteService.modifiersite(this.nomsitepopulaire,this.URL, this.image,idsitepopulaire).subscribe(data =>{
      console.log(data);
    })
    // Appel de la méthode de modification réussie
    //  this.showEditSuccessPopup();
    // Affichage d'un message de confirmation
    const alert =  await this.alertController.create({
      header: 'Modification réussie',
      message: 'Votre modification a été enregistrée avec succès.',
      buttons: ['OK']
    });

     alert.present();

    setTimeout(()=>{
      // // Rechargement de la page
    // window.location.reload();
    },3000);
  }
  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  };
}
