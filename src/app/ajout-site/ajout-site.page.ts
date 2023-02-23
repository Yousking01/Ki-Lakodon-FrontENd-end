import { Component, OnInit } from '@angular/core';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-ajout-site',
  templateUrl: './ajout-site.page.html',
  styleUrls: ['./ajout-site.page.scss'],
})
export class AjoutSitePage implements OnInit {
  nomsitepopulaire: string="";
  URL: string="";
  image: string="";

  ListeSite: any;
  

  constructor( private ajoutsiteService: AjoutsiteService,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });
    
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }

  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }

  ajoutsite(){
    this.ajoutsiteService.ajoutsite(this.nomsitepopulaire,this.URL, this.image).subscribe(data =>{
      console.log(data);
    })
  }
  // async opennotif() {
  //   const popup = await this.pvrCtlr.create({
  //     component: NotificationComponent,
  //   });
  //   popup.present();
  // }

  logout(): void{
    this.tokenStorage.clearToken();
    this.tokenStorage.clearToken();
  }
}
