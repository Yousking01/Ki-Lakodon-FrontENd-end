import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-profilannonceur',
  templateUrl: './profilannonceur.page.html',
  styleUrls: ['./profilannonceur.page.scss'],
})
export class ProfilannonceurPage implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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

  constructor( private http: HttpClient ) {
    
   }
 


  ngOnInit() {
  }
   //reload Page
   reloadPage() {
    window.location.reload();
  }

}
