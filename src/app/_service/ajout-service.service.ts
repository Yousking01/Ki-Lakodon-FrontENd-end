import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { constructor } from 'jasmine';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AjoutServiceService {

  API_AJOUTANNONCE = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenStorage.getToken()}`})
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService ) { }

  //AJOUT D'ANNONCE //
  ajoutannonce(titreannonce : string,
  descriptionannonce : string,
  budgetannonce : string,
  image: string,
  dateDebut: any,
  dateFin: any,
  // ciblediffusionannonce: string,
  idannonceur:number,
  idsitepopulaire:number) : Observable<any> {
    let data = new FormData();
    data.append('titreannonce', titreannonce);
    data.append('descriptionannonce', descriptionannonce);
    data.append('budgetannonce', budgetannonce);
    data.append('dateDebut', dateDebut);
    data.append('dateFin', dateFin);
    //data.append('idannonceur', idannonceur);
    // data.append('ciblediffusionannonce', ciblediffusionannonce);
    data.append('image', image);
    //let idanonne: any = 1


    return this.http.post(`http://localhost:8080/api/auth/annonce/creer/1/${idannonceur}/${idsitepopulaire}`,data)
  }

  // listPays(): Observable<any> {
  //   return this.http.get(this.API_AJOUTANNONCE + `/annonce/lire`);
  // }

  listSite(): Observable<any> {
    return this.http.get(this.API_AJOUTANNONCE + `/api/auth/siteweb/lire`);
  }

  listAnnoncuer(): Observable<any> {
    return this.http.get(this.API_AJOUTANNONCE + `/api/auth/annonceur/lire`);
  }

  listeAnnonce(): Observable<any> {
    return this.http.get(this.API_AJOUTANNONCE + `/api/auth/annonce/lire`);
  }

 suprimerannonce(idannonce:number): Observable<any> {
  return this.http.delete(this.API_AJOUTANNONCE + `/api/auth/annonce/suprimer/${idannonce}`);
 }

 //MODIFIER D'ANNONCE //
 modifierannonce(titreannonce : string,
  descriptionannonce : string,
  budgetannonce : string,
  image: string,
  dateDebut: string,
  dateFin: string,
  // ciblediffusionannonce: string,
  idannonce:number,
  // idsitepopulaire:number
  ) : Observable<any> {
    let data = new FormData();
    data.append('titreannonce', titreannonce);
    data.append('descriptionannonce', descriptionannonce);
    data.append('budgetannonce', budgetannonce);
    data.append('dateDebut', dateDebut);
    data.append('dateFin', dateFin);
    //data.append('idannonceur', idannonceur);
    // data.append('ciblediffusionannonce', ciblediffusionannonce);
    data.append('image', image);
    //let idanonne: any = 1


    return this.http.put(`http://localhost:8080/api/auth/annonce/modifier/${idannonce}`,data)
  }

}
