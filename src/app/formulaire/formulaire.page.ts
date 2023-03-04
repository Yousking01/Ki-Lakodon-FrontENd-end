import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  constructor(private tokenStorage: TokenStorageService,private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }


    //reload Page
    reloadPage() {
      window.location.reload();
    }
    logout(): void {
      this.tokenStorage.clearToken();
      this.router.navigate(['/connexion']);
    }
}
