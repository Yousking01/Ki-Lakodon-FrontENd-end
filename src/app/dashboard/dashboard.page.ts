import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  ListeAnnonceur:any;
  ListeSite: any;
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };


  constructor(private pvrc:PopoverController, private tokenStorage: TokenStorageService, private ajouteservice : AjoutServiceService,private ajoutsiteService : AjoutsiteService) { }

  ngOnInit() {

    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    });

    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
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
    this.tokenStorage.clearToken()
  }

}
