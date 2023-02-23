import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  constructor(private tokenStorage: TokenStorageService,) { }

  ngOnInit() {
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
