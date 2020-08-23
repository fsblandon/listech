import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Listech } from '../models/listech.model';

@Injectable({
  providedIn: 'root'
})
export class ListechService {

  urlBase = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getListTech(): Observable<Listech[]> {
    return this.httpClient.get<Listech[]>(this.urlBase + '/techs');
  }
}
