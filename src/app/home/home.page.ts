import { Component, OnInit } from '@angular/core';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ListeSite: any;
  
  slideOpts = {
    
    speed: 400,
      initialSlide: 0,
  slidesPerView: 1,
  autoplay:true

  };
  constructor(private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService) { }

  ngOnInit() {
    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });
  }

}
