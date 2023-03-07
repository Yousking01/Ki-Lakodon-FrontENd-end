import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, IonModal, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { AjoutServiceService } from '../_service/ajout-service.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-listeannonce',
  templateUrl: './listeannonce.page.html',
  styleUrls: ['./listeannonce.page.scss'],
})

export class ListeannoncePage implements OnInit {

  //REFRESH PAGE
  // datetime:string=new Date().toISOString().split("T")
  // [0]+ ""+new Date().toTimeString().split("GMT")[0].trim();

  //Declaration Des VARIABLES POUR L'AJOUT ANNONCE
  // titreannonce : string="";
  // descriptionannonce : string= "";
  // budgetannonce : string="";
  // dateDebut: string= "";
  // image: string="";
  // idannonceur: number= 0;
  // idsitepopulaire:number=0;
  // dateFin: string = "";
  // ciblediffusionannonce: string = "";
  ListeAnnonceur:any;
  ListeSite: any;
  ListeAnnonce: any
  id:number=0;
  constructor(private router: Router, private route: ActivatedRoute ,private ajouteservice : AjoutServiceService,private tokenStorage: TokenStorageService,  private pvrCtlr: PopoverController,private alertController: AlertController) { }

    //REFRESH PAGE
    doRefresh(event: any){
      setTimeout(() => {
        this.ngOnInit();
        event.target.complete();
      }, 2000);
    }
  ngOnInit() {
    
    //Recuperation de l'annonce
     this.Annonces();

    //REcuperation de l'annonceur
      this.Annonceurs();
      // this.doRefresh();
      this.siteliste();
  }
  siteliste(){
    this.ajouteservice.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    })
  }

  Annonceurs(){
    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    })
  }
  recupereImag(event:any){
    console.log(event.target.value)
    this.id=event.target.value
    console.log(this.ListeSite)
   }

  Annonces(){
    this.ajouteservice.listeAnnonce().subscribe(data => {
      this.ListeAnnonce = data;
      console.log(data);
    });
  }

  // //REFRESH PAGE
  // methodForPullDownRefresh(event: any)
  //  {
  //   setTimeout(()=>{
  //     this.datetime = new Date().toISOString().split
  //     ("T")[0]+ ""+new Date().toTimeString().split
  //     ("GMT")[0].trim();
  //     event.target.complete();
  //   },2000)
  // }
  // //reload Page
  // reloadPage() {
  //   window.location.reload();
  // }
  // handleRefresh(event:any) {
  //   setTimeout(() => {
  //     
  //     event.target.complete();
  //   }, 2000);
  // };

  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  };
  logout(): void {
    this.tokenStorage.clearToken();
    this.router.navigate(['/connexion']);
  }

  //METHODE PERMETTANT DE SUPRIMER UNE ANNONCE AVEC ID
  async suprimerannonce(idanonne: number){
    this.ajouteservice.suprimerannonce(idanonne).subscribe(data => {
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

        //Recuperation de l'annonce
        this.Annonces();

        //REcuperation de l'annonceur
          this.Annonceurs();

  // Attente de 2 secondes
  // setTimeout(() => {
  //   // Rechargement de la page
  //   window.location.reload();
  // }, 3000);


  }
  ////////POP-UP suprimer avec success
  // async showDeleteSuccessPopup() {
  //   const alert = await this.alertController.create({
  //     header: 'Suppression réussie',
  //     message: 'Votre élément a été supprimé avec succès.',
  //     buttons: ['OK']
  //   });
  
  //   await alert.present();
  // }


  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'Veilliez remplir tout les champ pour une bonne modification !!!';
  // name: string;
  titreannonce : string="";
  descriptionannonce : string= "";
  prixannonce : string="";
  dateDebut: string= "";
  image: string="";
  idannonceur: number= 0;
  idsitepopulaire:number=0;
  dateFin: string = "";
  idannonce: number=0;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  ajoutannonce() {
    this.modal.dismiss(this.titreannonce, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Salut, ${ev.detail.data}!`;
    }
  }


  //popup
  // async modification() {
  // //   let popup = await this.pvrCtlr.create({
  // //     component: ListeannoncePage,
  // //     cssClass: 'popover-content',
  // //     // buttons:[{
  // //     //   role:"cancel",
  // //     //   icon:"close",
  // //     // }]


  // //   })
  // //   popup.present();
  // // }

  // close() {
  //   this.ajouteservice.dismiss();
  // }

  // AjoutSalle(){
  //   console.log("AjoutSalle")
  //   this.salleservices.addSalle(this.salle);
  //   return "la salle a été crée avec succés !"
  // }
  async modifierannonce(idannonce:number){
    // this.ajouteservice.modifierannonce(this.titreannonce,this.descriptionannonce,this.budgetannonce,this.image,this.dateDebut,this.dateFin,idannonce).subscribe(data =>{
    //   console.log(data);
    this.ajouteservice.modifierannonce(this.titreannonce,this.descriptionannonce,this.prixannonce,this.image,this.dateDebut,this.dateFin,idannonce).subscribe(data =>{
      console.log(data);
    });
     // Appel de la méthode de modification réussie
    //  this.showEditSuccessPopup();
    // Affichage d'un message de confirmation
    const alert = await this.alertController.create({
      header: 'Modification réussie',
      message: 'Votre modification a été enregistrée avec succès.',
      buttons: ['OK']
    });

    await alert.present();

    // setTimeout(()=>{
    //   // // Rechargement de la page
    // // window.location.reload();
    // },3000)
    
  
  

  }
  ///////////////POP-UP de modification
  // async showEditSuccessPopup() {
  //   const alert = await this.alertController.create({
  //     header: 'Modification réussie',
  //     message: 'Votre modification a été enregistrée avec succès.',
  //     buttons: ['OK']
  //   });
  
  //   await alert.present();
  // }
}
