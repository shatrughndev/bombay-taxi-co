import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable, of, Subscription} from "rxjs";
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenSubscription = new Subscription();
  timeout!: number;
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    if (currentUser) {
      let tokenExpTimeUnix = parseInt(JSON.parse(atob(currentUser.token.split('.')[1])).exp);
      let currentTimeUnix = Date.now() / 1000;

      if (tokenExpTimeUnix < currentTimeUnix) {
        this.logout(); // Session has expired, so log the user out
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    const url = location.host;
    const urlPrefix = url.split('.')[0];

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': '1378',
      }),
    };

    return this.http.post<any>(`${this.apiUrl}/staff_login`, {email, password}, options).pipe(map((userData) => {
      console.log('User Data : ', userData);
      if (userData && userData.token) {
        localStorage.setItem('currentUser', JSON.stringify(userData));
        let tokenExpTimeUnix = parseInt(JSON.parse(atob(userData.token.split('.')[1])).exp);
        let currentTimeUnix = Date.now() / 1000;
        this.timeout = (tokenExpTimeUnix - currentTimeUnix - 5) * 1000;
        this.expirationCounter(this.timeout);
      }
      return userData;
    }));
  }

  // Get Token Any Where
  getToken(): any {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser')!).token;
    }
  }

  logout(): void {
    const url = location.host;
    const urlPrefix = url.split('.')[0];

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': this.getToken(),
      }),
    };
    this.http.get(`${this.apiUrl}/staff_logout`, options).subscribe((resp: any) => {
      // Clear local storage after logout
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }


  expirationCounter(timeout: number) {
    console.log('Time Out time : ', timeout);
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      Swal.fire({
        title: 'Session Expired!',
        text: 'Your login session has been expired! Please Login',
        icon: 'info',
      }).then(() => {
        this.tokenSubscription.unsubscribe();
        this.logout();
      });
    });
  }

  // checkTokenExpirationAndAutoLogout(): void {
  //   if (this.tokenService.isTokenExpired()) {
  //     alert("session timeout")
  //     // Token has expired, log the user out and navigate to the login page.
  //     this.tokenService.removeToken();
  //     this.router.navigate(['/login']);
  //   }
  // }


}



