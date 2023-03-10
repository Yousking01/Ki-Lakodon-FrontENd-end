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
      // Envoyer les donn??es par mail ?? l'adresse mail du site choisi
  // this.envoyerMail();
    })
    const alert = await this.alertController.create({
      header: 'Annonce ajout??e',
      message: 'Votre annonce a ??t?? ajout??e avec succ??s.',
      buttons: ['OK']
      
    });


    await alert.present();

    // location.reload();
    //Faire disparaitre le contenu du input
    this.resetforme();
  }

  // envoyerMail() {
  //   // R??cup??rer les donn??es du formulaire
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
  
  //   // Envoyer les donn??es par mail ?? l'adresse mail du site choisi
  //   const url = 'http://localhost:3000/sendmail'; // URL de l'API qui envoie le mail
  //   const body = {
  //     annonce: annonce,
  //     email: 'adresse@mail.com' // adresse mail du site choisi
  //   };
  //   this.http.post(url, body).subscribe(
  //     (response) => {
  //       console.log(response); // Afficher la r??ponse de l'API
  //     },
  //     (error) => {
  //       console.log(error); // Afficher l'erreur en cas de probl??me
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
      header: 'Annonce modifi??e',
      message: 'Votre annonce a ??t?? modifi??e avec succ??s.',
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
  //     subject: 'Nouvelle annonce ?? poster',
  //     body: 'Voici les donn??es de la nouvelle annonce : \n\n' +
  //           'Titre : ' + this.annonce.titreannonce + '\n' +
  //           'Nom de l'Annonceur: ' + this.annonce.annonceur.username + '\n' +
  //           'Adresse de l'Annonceur: ' + this.annonce.annonceur.adrresseannonceur + '\n' +
  //           'T??l??phone: ' + this.annonce.annonceur.numeroannonceur + '\n' +
  //           'Description : ' + this.annonce.descriptionannonce + '\n' +
  //           'Date de D??but : ' + this.annonce.dateDebut + '\n' +
  //           'Date de Fin : ' + this.annonce.dateFin + '\n' +
  //           'Prix : ' + this.annonce.budgetannonce + '\n' +
  //           'Photo : ' + this.annonce.image,
  //     isHtml: false
  //   };
  
  //   this.emailComposer.open(email);
  // }
}
