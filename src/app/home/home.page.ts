import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { AuthService } from '../_service/auth.service';
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
  role:string []=[];
  Listerole:any;
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
  
  constructor(private router: Router, private route: ActivatedRoute ,private authService: AuthService,private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService) {


   }

  ngOnInit() {
    //METHODE PERMETTANT L4UTILISATION EN FONCTION DU ROLE
    this.authService.listerole().subscribe(data =>{
      this.Listerole = data;
      console.log(data);
    });
    
   

    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });

    
  
  }
  
  ionViewDidEnter(){
    if(this.tokenStorage.checkConnection()){
      this.courentUser = this.tokenStorage.recupererUser();

      this.role = this.courentUser.roles ;
      console.log(this.role);
      
    if(this.role.includes("ROLE_ADMIN")){
      this.admin = true ;
    } else if(this.role.includes("ROLE_USER")){
      this.user = true;
    } else if(this.role.includes("ANNONCEUR")){
      this.annonceurR = true ;

    } else if(this.role.includes("SITE_WEB")){
      this.SitewebR = true ;
    }

    }
  }
  // ionViewDidEnter() {
  //   if (this.tokenStorage.checkConnection()) {
  //     this.courentUser = this.tokenStorage.recupererUser();
  //     this.role = this.courentUser.role;
  
  //     if (this.role !== undefined && this.role !== null) { // Vérifiez que le rôle est défini
  //       if (this.role.includes("ROLE_ADMIN")) {
  //         this.admin = true;
  //       } else if (this.role.includes("ROLE_USER")) {
  //         this.user = true;
  //       } else if (this.role.includes("ROLE_ANNONCEUR")) {
  //         this.annonceurR = true;
  //       } else if (this.role.includes("ROLE_SITEWEB")) {
  //         this.SitewebR = true;
  //       }
  //     }
  //   }
  // }
  
 

    //reload Page
    reloadPage() {
      window.location.reload();
    }
    logout(): void {
      this.tokenStorage.clearToken();
      this.router.navigate(['/connexion']);
    }

}
