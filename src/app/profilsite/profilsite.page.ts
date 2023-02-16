import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AjoutServiceService } from '../_service/ajout-service.service';
import { AjoutsiteService } from '../_service/ajoutsite.service';
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

  constructor( private http: HttpClient,private tokenStorage: TokenStorageService, private ajoutsiteService : AjoutsiteService, private ajoutService: AjoutServiceService, private router: ActivatedRoute ) {
    
   }
  // constructor() { }

  ngOnInit() {
    //recuperation de l'id du site
    this.idsite = this.router.snapshot.params['id'];
    this.ajoutsiteService.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    });

    this.ajoutService.listAnnoncuer().subscribe(data => {
      this.ListeAnnonce = data;
      console.log(data);
    });

    this.ajoutsiteService.listSitebyId(this.idsite).subscribe(data => {
      this.ListeSitebyId = data;
      console.log(data);
    })

    this.ajoutsiteService.listeAnnonceSiteByIdSite(this.idsite).subscribe(data =>{
      this.annonceSite = data;
    })
    

    
  }


    //reload Page
    reloadPage() {
      window.location.reload();
    }
}
