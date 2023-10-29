import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http: HttpClient) { }
  url = 'http://localhost:3000/';


  // Methods

  // get method
  get(apiEndPointRoute: String): Observable<any>{
    return this.http.get(this.url+ apiEndPointRoute);
  }

  // post method
  post(apiEndPointRoute: String, data: any): Observable<any>{
    return this.http.post(this.url+apiEndPointRoute, data);
  }

  // delete method

  //put method

  setHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('key', 'value');
  }
}
