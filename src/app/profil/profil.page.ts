import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.recupererUser();
  }

}
