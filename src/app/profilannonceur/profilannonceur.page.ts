import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { UserService } from '../_service/user.service';


@Component({
  selector: 'app-profilannonceur',
  templateUrl: './profilannonceur.page.html',
  styleUrls: ['./profilannonceur.page.scss'],
})
export class ProfilannonceurPage implements OnInit {


  ///RECUPERATION DE LA LISTE ANNONCEUR
  ListeAnnonceur: any;
  id: any;
  ListeAnnonceurbyId: any;
  user: any;
  listeuserbyId: any;
  idannonce: any;
  ListeSitebyId: any;
  ListeannoncebyId: any;

  constructor(private authService: AuthService,private ajouteservice : AjoutServiceService,public alertController: AlertController,private router: Router, private route: ActivatedRoute , private tokenStorage: TokenStorageService, private http: HttpClient,private userService: UserService ) {
    // this.user = this.authService.getCurrentUser();
   }
 


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idannonce = params['id'];
      console.log("id du annonce===========",this.idannonce);

      this.ajouteservice.listeAnnonceById(this.idannonce).subscribe(data =>{
        console.log("objet trouvee========", this.idannonce);
        this.ListeannoncebyId = data;
      })
    })

    /////lister annonceur
    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    });
    /////:lister annonceur par id
    //recuperation de l'id du site
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("id du Ann===========", this.id);

      this.ajouteservice.listeAnnonceurById(this.id).subscribe(data =>{      
        console.log("objet Annonceur============", this.id);
        this.ListeAnnonceurbyId = data;
      });
    });

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
