import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { AuthService } from '../_service/auth.service';
import { InscriptionService } from '../_service/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  //JWT
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //RECUPERATION DU ROLE
  Listerole:any;

  //DECLARATION DES VARIABLES POUR L'INSCRIPTION
  username: string="";
  email: string="";
  password: string="";
  confirmpassword: string="";
  role: string="";

  ////RECUPERATION DES ATTRIBUT DU SITE
  nomsitepopulaire: string="";
  URL: string="";
  image: string="";

  ListeSite: any;

  /////Recupération des attributs de l'annonceur
  adrresseannonceur: string="";
  numeroannonceur: string="";
  budgetannonceur: number=0;
  // idespacepub:number=0;
  idKilakodon:number=0;
  ListeAnnonceur:any;

  roleId: any;
  Listekilakodon: any;
  // role: any;

  constructor(private alertController: AlertController, private router: Router, private route: ActivatedRoute , private authService: AuthService, private inscriptionService: InscriptionService,private ajoutsiteService: AjoutsiteService,private ajouteservice : AjoutServiceService) { }

  
  ngOnInit() {
    // this.role = this.route.snapshot.params['id'];
    // console.log(this.role);
    // Utilisez l'ID pour récupérer les informations spécifiques à afficher sur la page
    this.authService.listerole().subscribe(data =>{
      this.Listerole = data;
      console.log(data);
    });
    this.ajouteservice.listekilakodon().subscribe(data =>{
      this.Listekilakodon = data;
      console.log(data);
    })
  }

  //JWT
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

    

    // async addinscription(){
    //   console.log('Valeur de "role" : ', this.role);
    //   console.log('kilakodonnn:', this.idKilakodon);
    //   this.envoyerrole();
    //   const alert = await this.alertController.create({
    //     header: 'Inscription réussie',
    //     message: 'Votre inscription a été effectuée avec succès.',
    //     buttons: [{
    //       text: 'Commencer',
    //       handler: () => {
    //         this.router.navigate(['/connexion']);
    //       }
    //     }]
    //   });
    
    //   await alert.present();
    //  }
    async addinscription(){
      console.log('Valeur de "role" : ', this.role);
      console.log('kilakodonnn:', this.idKilakodon);
    
      try {
        await this.envoyerrole();
        const alert = await this.alertController.create({
          header: 'Inscription réussie',
          message: 'Votre inscription a été effectuée avec succès.',
          buttons: [{
            text: 'Commencer',
            handler: () => {
              if(this.role== "ANNONCEUR"){
                this.router.navigate(['/ajout-annonceur'])
              }else{
                this.router.navigate(['/connexion']);
              }
              
            }
          }]
        });
        await alert.present();
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Une erreur est survenue lors de l\'inscription.',
          buttons: [{
            text: 'OK'
          }]
        });
        await alert.present();
      }
    }
    
    async envoyerrole() {
      // Votre code pour enregistrer l'utilisateur dans la base de données
      // Lancez une erreur s'il y a un problème avec l'enregistrement
      // Exemple : throw new Error('Erreur lors de l\'enregistrement');
      try{
        // if(this.role=='2'){
          // this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
          //   console.log(data);
          // });
          const data = await this.inscriptionService.ajoutinscription(this.form.username, this.form.email, this.form.password, this.form.confirmpassword, this.role).toPromise();
          console.log(data); // Affiche la réponse de l'API si elle retourne des données

        // } else if(this.role=='3'){
          // this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
          //   console.log(data);
          //   });
          // const data = await this.inscriptionService.ajoutinscription(this.form.username, this.form.email, this.form.password, this.form.confirmpassword, this.role).toPromise();
          // console.log(data); // Affiche la réponse de l'API si elle retourne des données

        // } else {
        //   // this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
        //   //   console.log(data);
        //   // });
        //   const data = await this.inscriptionService.ajoutinscription(this.form.username, this.form.email, this.form.password, this.form.confirmpassword, this.role).toPromise();
        //   console.log(data); // Affiche la réponse de l'API si elle retourne des données

        // }
      }catch (error:any) {
             throw new Error('Erreur lors de l\'enregistrement : ' + error.message);
          }
    }
    // async envoyerrole() {
    //   try {
    //     const data = await this.inscriptionService.ajoutinscription(this.form.username, this.form.email, this.form.password, this.form.confirmpassword, this.role).toPromise();
    //     console.log(data); // Affiche la réponse de l'API si elle retourne des données
    //   } catch (error) {
    //     throw new Error('Erreur lors de l\'enregistrement : ' + error.message);
    //   }
    // }


    // envoyerrole(){
    //   if(this.role=='2'){
    //     this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
    //       console.log(data);
    //     });
    //   } else if(this.role=='3'){
    //     this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
    //       console.log(data);
    //       });
    //   } else {
    //     this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.role).subscribe(data =>{
    //       console.log(data);
    //     });
    //   }
    // }
    
    // async inscris() {
    //   const alert = await this.alertController.create({
    //     header: 'Inscription réussie',
    //     message: 'Votre inscription a été effectuée avec succès.',
    //     buttons: [{
    //       text: 'Commencer',
    //       handler: () => {
    //         this.router.navigate(['/connexion']);
    //       }
    //     }]
    //   });
    
    //   await alert.present();
    // }
    onRoleSelect(event: any) {
      console.log('Sélection du rôle:', this.role);
      // console.log('listeeee roleeeeee:', this.Listerole);
       this.role = event.target.value;
      // this.router.navigate(['/inscription', role]);
    }
    //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }
  

}


// //reload Page
    // reloadPage() {
    //   window.location.reload();
    // }
// console.log(this.form.role);
      // this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword).subscribe(data =>{
      //   console.log(data);
      // })
      // ngOnInit() {
  //   // this.id = this.route.snapshot.params['id'];
  //   this.id = this.route.snapshot.params['id'];
  //   console.log(this.id);
  //   // this.authService.listerole().subscribe(data =>{
  //   //   this.Listerole = data;
  //   //   console.log(data);
  //   // })
  // }