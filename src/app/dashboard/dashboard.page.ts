import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  ListeAnnonceur:any;
  ListeSite: any;
  ListeAnnonce: any;
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };


  constructor(private router: Router,private toastCtrl: ToastController,private pvrc:PopoverController, private tokenStorage: TokenStorageService, private ajouteservice : AjoutServiceService,private ajoutsiteService : AjoutsiteService,) { }

  ngOnInit() {

    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    });

    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });
     //Recuperation de l'annonce
     this.ajouteservice.listeAnnonce().subscribe(data => {
      this.ListeAnnonce = data;
      console.log(data);
    });
  }
  async openNotification(){
    const popup = await this.pvrc.create({
      component: NotificationComponent
    });
    popup.present();
  }

  logout(): void{
    this.tokenStorage.clearToken();
    // this.tokenStorage.clearToken();
    this.router.navigate(['/connexion']);
  }
  async voir(){
    let toast = await this.toastCtrl.create({
      message: "Une nouvelle annonce a été lancée",
      duration:2000,
      color:"white",
      position:"top",   
      buttons:[{
  // text:"Fermer",
  role:"cancel",
  icon:"close",
  handler: () => {
    console.log('merci');
  }
}
]
})
toast.present();
  }

  //METHODE PERMETTANT DE SUPRIMER UNE ANNONCE AVEC ID
  suprimerannonce(idannonce: number){
    this.ajouteservice.suprimerannonce(idannonce).subscribe(data => {
      console.log(data);
    })
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }
}
