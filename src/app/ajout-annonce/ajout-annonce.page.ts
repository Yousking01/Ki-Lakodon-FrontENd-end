import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {

  //Declaration Des VARIABLES POUR L'AJOUT ANNONCE
  titreannonce : string="";
  descriptionannonce : string= "";
  prixannonce : string="";
  dateDebut: any;
  image: string="";
  idannonceur: number= 0;
  id:number=0;
  dateFin: any;
  idannonce: number=0;
  // ciblediffusionannonce: string = "";
  ListeAnnonceur:any;
  ListeSite: any;

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute , private ajouteservice : AjoutServiceService,public alertController: AlertController, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    });
    
    this.ajouteservice.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    })
    
  }

    //reload Page
    // reloadPage() {
    //   window.location.reload();
    // }

    resetforme(){
      this.titreannonce = '';
      this.descriptionannonce = '';
      this.prixannonce ='';
      this.image = '';
      this.dateDebut = '';
      this.dateFin = '';
      this.idannonceur = 0;
      this.id = 0;
    }
 
    
  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }
  recupereImag(event:any){
   console.log(event.target.value)
   this.id=event.target.value
   console.log(this.ListeSite)
  }

  async ajoutannonce(){
    console.log("la valeuuuuuuuuuuuuuuurrrrrrrrrr")
    console.log(this.id)
    this.ajouteservice.ajoutannonce(this.titreannonce,this.descriptionannonce,this.prixannonce,this.image,this.dateDebut,this.dateFin,this.idannonceur,this.id).subscribe(data =>{
      console.log(data);
      // Envoyer les données par mail à l'adresse mail du site choisi
  // this.envoyerMail();
    })
    const alert = await this.alertController.create({
      header: 'Annonce ajoutée',
      message: 'Votre annonce a été ajoutée avec succès.',
      buttons: ['OK']
      
    });


    await alert.present();

    // location.reload();
    //Faire disparaitre le contenu du input
    this.resetforme();
  }

  // envoyerMail() {
  //   // Récupérer les données du formulaire
  //   const annonce = {
  //     titreannonce: this.titreannonce,
  //     budgetannonce: this.budgetannonce,
  //     idannonceur: this.idannonceur,
  //     dateDebut: this.dateDebut,
  //     dateFin: this.dateFin,
  //     descriptionannonce: this.descriptionannonce,
  //     image: this.image,
  //     idsitepopulaire: this.idsitepopulaire
  //   };
  
  //   // Envoyer les données par mail à l'adresse mail du site choisi
  //   const url = 'http://localhost:3000/sendmail'; // URL de l'API qui envoie le mail
  //   const body = {
  //     annonce: annonce,
  //     email: 'adresse@mail.com' // adresse mail du site choisi
  //   };
  //   this.http.post(url, body).subscribe(
  //     (response) => {
  //       console.log(response); // Afficher la réponse de l'API
  //     },
  //     (error) => {
  //       console.log(error); // Afficher l'erreur en cas de problème
  //     }
  //   );
  // }
  //METHODE PERMETTANT DE SUPRIMER UNE ANNONCE AVEC ID
  suprimerannonce(idanonne: number){
    this.ajouteservice.suprimerannonce(idanonne).subscribe(data => {
      console.log(data);
    })
  }

  async modifierannonce(){
    this.ajouteservice.modifierannonce(this.titreannonce,this.descriptionannonce,this.prixannonce,this.image,this.dateDebut,this.dateFin,this.idannonce).subscribe(data =>{
      console.log(data);
    })
    const alert = await this.alertController.create({
      header: 'Annonce modifiée',
      message: 'Votre annonce a été modifiée avec succès.',
      buttons: ['OK']
      
    });

    await alert.present();

    // location.reload();
    //Faire disparaitre le contenu du input
    this.resetforme();
  }
  logout(): void {
    this.tokenStorage.clearToken();
    this.router.navigate(['/connexion']);
  }

  // sendEmail() {
  //   let email = {
  //     to: 'djireyoussouf1999@gmail.com',
  //     subject: 'Nouvelle annonce à poster',
  //     body: 'Voici les données de la nouvelle annonce : \n\n' +
  //           'Titre : ' + this.annonce.titreannonce + '\n' +
  //           'Nom de l'Annonceur: ' + this.annonce.annonceur.username + '\n' +
  //           'Adresse de l'Annonceur: ' + this.annonce.annonceur.adrresseannonceur + '\n' +
  //           'Téléphone: ' + this.annonce.annonceur.numeroannonceur + '\n' +
  //           'Description : ' + this.annonce.descriptionannonce + '\n' +
  //           'Date de Début : ' + this.annonce.dateDebut + '\n' +
  //           'Date de Fin : ' + this.annonce.dateFin + '\n' +
  //           'Prix : ' + this.annonce.budgetannonce + '\n' +
  //           'Photo : ' + this.annonce.image,
  //     isHtml: false
  //   };
  
  //   this.emailComposer.open(email);
  // }
}
