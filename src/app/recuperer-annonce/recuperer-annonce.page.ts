import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { AlertController, PopoverController } from '@ionic/angular';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-recuperer-annonce',
  templateUrl: './recuperer-annonce.page.html',
  styleUrls: ['./recuperer-annonce.page.scss'],
})
export class RecupererAnnoncePage implements OnInit {
  ListeAnnonce: any;
  Lireannonceparidannonceur: any;
  idAnnonceur: number=0;

  constructor(private router: Router,private emailComposer: EmailComposer, private route: ActivatedRoute ,private ajouteservice : AjoutServiceService,private tokenStorage: TokenStorageService,  private pvrCtlr: PopoverController,private alertController: AlertController) { }

  ngOnInit() {
    // this.ajouteservice.listAnnoncuer().subscribe(data =>{
    //   this.ListeAnnonceur = data;
    //   console.log(data);
    // })
    this.Lireannonceparidannonceur().subscribe((data: any) =>{
      this.Lireannonceparidannonceur = data;
      console.log(data);
    })
  }

  ionViewDidEnter() {
    this.ajouteservice.listeAnnonceByIdannonceur(this.idAnnonceur).subscribe(
      (data) => {
        this.Lireannonceparidannonceur = data;

        // Composer l'email à envoyer
        let email = {
          to: 'destinataire@example.com',
          subject: `Annonce n°${this.Lireannonceparidannonceur.id}`,
          body: `Titre : ${this.Lireannonceparidannonceur.titre}<br><br>Description : ${this.Lireannonceparidannonceur.description}`,
          isHtml: true
        };

        // Envoyer l'email
        this.emailComposer.open(email);
      },
      (error) => {
        console.log('Erreur :', error);
      }
    );
  }

}
