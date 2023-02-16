import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  API_NOTIF = "http://localhost:8080"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenStorage.getToken()}`})
  };
  constructor( private http: HttpClient, private tokenStorage: TokenStorageService) { }

  //AJOUT NOTIF
  ajouternotif(
    descriptionNotif: string,
    validation: any) : Observable<any> {
      let data = new FormData();
      data.append('descriptionNotif', descriptionNotif);
      data.append('validation', validation);

      return this.http.post(`http://localhost:8080/api/auth/notification/lire`, data)
    }

    listenotif(): Observable<any> {
      return this.http.get(this.API_NOTIF + `/api/auth/notification/lire`);
    }
}
