import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { API_URL } from '../api-url.api';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Information } from '../../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getInformations(): Observable<Information[]> {
    return this.http.get<Information[]>(`${API_URL}/informations`)
      .pipe(
        retry(3),
      );
  }
}
