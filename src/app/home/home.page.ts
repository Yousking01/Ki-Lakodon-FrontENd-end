import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';
// import SwiperCore, { EffectFade } from 'swiper'
// import { IonicSlides } from '@ionic/angular';
// SwiperCore.use([EffectFade, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  courentUser:any;
  ListeSite: any;
  admin: boolean = false;
  user:boolean = false;
  annonceurR: boolean = false;
  SitewebR: boolean = false;
  roles:string []=[];

  slideOpts = {
    
    speed: 400,
      initialSlide: 0,
  slidesPerView: 1,
  autoplay:true

  };

  slideOpts1 = {
    
  speed: 1000,
  initialSlide: 0,
  slidesPerView: 1,
  autoplay:true,
  
  };
  
  constructor(private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService) {


   }

  ngOnInit() {
    //METHODE PERMETTANT L4UTILISATION EN FONCTION DU ROLE
    
    
   

    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });

    
  
  }
  
  ionViewDidEnter(){
    if(this.tokenStorage.checkConnection()){
      this.courentUser = this.tokenStorage.recupererUser();

      this.roles = this.courentUser.roles ;

    if(this.roles.includes("ROLE_ADMIN")){
      this.admin = true ;
    } else if(this.roles.includes("ROLE_USER")){
      this.user = true;
    } else if(this.roles.includes("ROLE_ANNONCEUR")){
      this.annonceurR = true ;

    } else if(this.roles.includes("ROLE_SITEWEB")){
      this.SitewebR = true ;
    }

    }
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }

}
