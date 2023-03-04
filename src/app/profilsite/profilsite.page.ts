import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AjoutsiteService } from '../_service/ajoutsite.service';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';


@Component({
  selector: 'app-profilsite',
  templateUrl: './profilsite.page.html',
  styleUrls: ['./profilsite.page.scss'],
})
export class ProfilsitePage implements OnInit {

  idsite:any
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  ListeSite: any;
  ListeAnnonce: any;
  site:any
  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    // Nous utilisons ces structures vides comme espaces réservés pour la thématisation dynamique.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: { display: true, 
      // align:'top',
      
      
    },
    
      

    }
  };
  public barChartLabels: string[] = [ 'Lundi', 'Mardi', 'Mercrédi', 'Jeudi', 'Vendrédi', 'Samedi', 'Dimache' ];
  public barChartType: ChartType = 'bar';
  

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 25, 28, 62, 25, 95, 55,  ], label: 'Taux de Ventes', backgroundColor:'#29B6F6', borderRadius:8 },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };
  ListeSitebyId: any;
  annonceSite: any;
  ListeAnnonceByIdSite: any;

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  constructor(private navCtrl: NavController, private http: HttpClient,private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService, private ajoutService: AjoutServiceService, private router: Router, private route: ActivatedRoute,private authService: AuthService,  ) {
    
   }
  // constructor() { }

  ngOnInit() {
    // //recuperation de l'id du site
    this.route.params.subscribe(params => {
      this.idsite = params['id'];
      console.log("id du site===========",this.idsite);

      this.ajoutsiteService.listSitebyId(this.idsite).subscribe(data =>{      
        console.log("objet trouve============",data);
        this.ListeSitebyId = data;
      });
    });
    this.ajoutsiteService.listeAnnonceSiteByIdSite(this.idsite).subscribe(data =>{
      console.log("id sitebyannonce=====",data);
      this.ListeAnnonceByIdSite = data;
    });
    // this.route.params.subscribe(params => {
    //   this.idsite = params['id'];
    //   console.log("id du site===========",this.idsite);
    
    //   this.authService.register({username: '', email: '', password: ''}).subscribe(data => {
    //     this.tokenStorage.saveToken(data.accessToken); // Enregistrer le jeton d'accès dans le TokenStorageService
      
    //     const options = { 
    //       headers: new HttpHeaders({
    //         'Authorization': 'Bearer ' + data.accessToken
    //       })
    //     };
        // // Envoyer une demande POST au point de terminaison de l'API pour inscrire un nouvel utilisateur
        // this.http.post('http://localhost:8080/api/auth/signup', {
        //   username: '...',
        //   email: '...',
        //   password: '...'
        // }, options).subscribe(response => {
        //   console.log('Inscription réussie :', response);
        // }, error => {
        //   console.error('Erreur lors de l\'inscription :', error);
        // });
    

    //     this.ajoutsiteService.listSitebyId(this.idsite).subscribe(data => {   
    //       this.ListeSitebyId = data;   
    //       console.log("objet trouve============",data.url);
    //     });
    //   }, error => {
    //     console.log('Error:', error);
    //   });
    // });
    // this.idsite = this.router.snapshot.params['id'];

    // console.log("id du site===========",this.idsite);

    // this.ajoutsiteService.listSitebyId(this.idsite).subscribe(data =>{      
    //   console.log("objet trouve============",data.url);
    // });
    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });

    this.ajoutService.listAnnoncuer().subscribe(data => {
      this.ListeAnnonce = data;
      console.log(data);
    });
//2ème partie modifier
    // this.ajoutsiteService.listSitebyId(this.idsite).subscribe(data => {
    //   this.ListeSitebyId = data;
      
    //   console.log(data);
    // })

    // this.ajoutsiteService.listSitebyId(this.idsite, {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer ' + this.tokenStorage.getToken()
    //   })
    // }).subscribe(data => {
    //   this.ListeSitebyId = data;
    //   console.log(data);
    // });


    // this.ajoutsiteService.listeAnnonceSiteByIdSite(this.idsite).subscribe(data =>{
    //   this.annonceSite = data;
    // })
    this.authService.register({username: '', email: '', password: ''}).pipe(
      tap((data: any) => {
        this.tokenStorage.saveToken(data.accessToken); // Enregistrez le jeton d'accès dans le TokenStorageService
      })
    ).subscribe(token => {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      const options = { headers: headers };
      
      // this.ajoutsiteService.listeAnnonceSiteByIdSite(this.idsite, options).subscribe(data => {
      //   this.annonceSite = data;
      this.ajoutsiteService.listeAnnonceSiteByIdSite(this.idsite).subscribe(data => {
        this.annonceSite = data;
      }, error => {
        console.error('Erreur lors de la récupération des annonces du site :', error);
      });
    }, error => {
      console.log('Erreur lors de l\'authentification :', error);
    });
    

    
  }
  closePage(){
    // this.navCtrl.pop();
    // this.navCtrl.navigateBack('/listesite');
    this.navCtrl.navigateBack('listesite', {
      queryParams: { param1: 'valeur1', param2: 'valeur2' }
    });
  }
 
  // closePage() {
  //   // Vérifiez si la page est déjà dans la pile de navigation
  //   const isAlreadyInStack = this.navCtrl.getViews().some(view => view instanceof ListeSitePage);

  //   if (isAlreadyInStack) {
  //     // Si la page est déjà dans la pile, utilisez la méthode "pop()" pour la retirer
  //     this.navCtrl.popTo(ListeSitePage);
  //   } else {
  //     // Si la page n'est pas encore chargée, naviguez vers elle normalement
  //     this.navCtrl.navigateForward('/liste-site');
  //   }
  // }
  


    // //reload Page
    // reloadPage() {
    //   window.location.reload();
    // }
    logout(): void {
      this.tokenStorage.clearToken();
      this.router.navigate(['/connexion']);
    }
    // goBack() {
    //   this.router.navigate(['/listesite']);
    // }

}
