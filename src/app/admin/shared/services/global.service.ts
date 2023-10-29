import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * @description get request  
   * @param urlEndpoint
   * @returns
   */
  // getRequest(urlEndpoint: string) {
  //   return this.http.get(this.url + '/' + urlEndpoint);
  // }
  getByID(urlEndpoint: string, id: number): Observable<any> {
    return this.http.get(this.url + '/' + urlEndpoint + '/' + id);
  }

  getRequest(urlEndpoint: string): Observable<any> {
    return this.http.get(this.url + '/' + urlEndpoint);
  }
  /**
   * @description get request by id 
   * @param urlEndpoint
   * @param id
   */
  getRequestById(urlEndpoint: string, id: number) {
    return this.http.get(this.url + '/' + urlEndpoint + '/' + id);
  }
  search(query: string, urlEndpoint: string): Observable<any> {
    const params = { q: query }; // Customize query parameter name if needed

    return this.http.get(this.url + '/' + urlEndpoint, { params });
  }
  /**
   * @description post request 
   * @param urlEndpoint
   * @param data
   */
  postRequest(urlEndpoint: string, data: any) {
    return this.http.post(this.url + '/' + urlEndpoint, data);
  }

  /**
   * @description put request 
   * @param urlEndpoint
   * @param data
   */

  putRequest(urlEndpoint: string, data: any) {
    return this.http.put(this.url + '/' + urlEndpoint, data);
  }

  /**
   * @description delete request by id 
   * @param urlEndpoint
   * @param id
   */
  deleteRequestById(urlEndpoint: string, id: number) {
    return this.http.delete(this.url + '/' + urlEndpoint + '/' + id);
  }
}
