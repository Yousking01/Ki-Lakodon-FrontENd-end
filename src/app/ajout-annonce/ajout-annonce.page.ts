import { Component, OnInit } from '@angular/core';
import { AjoutServiceService } from '../_service/ajout-service.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {

  //Declaration Des VARIABLES POUR L'AJOUT ANNONCE
  titreannonce : string="";
  descriptionannonce : string= "";
  budgetannonce : string="";
  dateDebut: string= "";
  image: string="";
  idannonceur: number= 0;
  idsitepopulaire:number=0;
  dateFin: string = "";
  // ciblediffusionannonce: string = "";
  ListeAnnonceur:any;
  ListeSite: any;


  constructor( private ajouteservice : AjoutServiceService) { }

  ngOnInit() {
    this.ajouteservice.listAnnoncuer().subscribe(data =>{
      this.ListeAnnonceur = data;
      console.log(data);
    });
    
    this.ajouteservice.listSite().subscribe(data =>{
      this.ListeSite = data;
      console.log(data);
    })
    
  }

  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }

  ajoutannonce(){
    this.ajouteservice.ajoutannonce(this.titreannonce,this.descriptionannonce,this.budgetannonce,this.image,this.dateDebut,this.dateFin,this.idannonceur,this.idsitepopulaire).subscribe(data =>{
      console.log(data);
    })
  }
}