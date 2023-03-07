import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  courentUser:any;
  ListeSite: any;
  admin: boolean = false;
  user:boolean = false;
  annonceurR: boolean = false;
  SitewebR: boolean = false;
  role:string []=[];
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, private tokenStorage: TokenStorageService, private pvrCtlr: PopoverController) {}
  async opennotif() {
    const popup = await this.pvrCtlr.create({
      component: NotificationComponent,
    });
    popup.present();
  }

  ionViewDidEnter(){
    if(this.tokenStorage.checkConnection()){
      this.courentUser = this.tokenStorage.recupererUser();
      this.id = this.tokenStorage.recupererUser().id
      this.role = this.courentUser.roles ;
      console.log(this.id);
      
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

    //reload Page
    reloadPage() {
      window.location.reload();
    }
    goToHome(){
      // this.router.navigate(['/connexion']);
      this.router.navigate(['/tabs/home']);
    }
}
