import { Component, OnInit } from '@angular/core';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-listesite',
  templateUrl: './listesite.page.html',
  styleUrls: ['./listesite.page.scss'],
})
export class ListesitePage implements OnInit {
  
  ListeSite: any;

  constructor(private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService) { }


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
    logout(): void{
      this.tokenStorage.clearToken();
      this.tokenStorage.clearToken();
    }

}
