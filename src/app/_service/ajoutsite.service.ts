import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AjoutsiteService {
  
  listeAnnonce() {
    throw new Error('Method not implemented.');
  }

  API_AJOUTSITE = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenStorage.getToken()}`})
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  ajoutsite(
    nomsitepopulaire : string,
    URL : string,
    image: string
    ) : Observable<any> {
    let data = new FormData();
    data.append('nomsitepopulaire', nomsitepopulaire);
    data.append('URL', URL);
    data.append('image',image);

    return this.http.post(this.API_AJOUTSITE + `/api/auth/siteweb/creer`,data)
  }

  listSite(): Observable<any> {
    return this.http.get(this.API_AJOUTSITE + `/api/auth/siteweb/lire`);
  }

  listSitebyId(id:number): Observable<any> {
    return this.http.get(this.API_AJOUTSITE + `/api/auth/siteweb/lire/${id}`);
  }

  listeAnnonceSiteByIdSite(id:number):Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/annonce/lireannonceparidsite/${id}`);
  }
}
