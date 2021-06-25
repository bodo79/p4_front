import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class P4AppServiceService {

  constructor(private http : HttpClient) { }

  public getData(){
    var token = localStorage.getItem('token')
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    }
    return this.http.get('/api/data/get', header)
  }

  public getAPI(){
    var token = localStorage.getItem('token')
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    }
    return this.http.get('/api', header)
  }
}
