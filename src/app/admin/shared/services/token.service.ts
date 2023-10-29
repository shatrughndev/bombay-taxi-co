import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'auth_token';

  getToken(): string | null {
    return JSON.parse(localStorage.getItem('currentUser')!).token;
  }

  setToken(token: string): void {
    localStorage.setItem('currentUser', token);
  }

  removeToken(): void {
    localStorage.removeItem('currentUser');
    // JSON.parse(localStorage.removeItem('currentUser')!).token;
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    // alert(token)
    if (!token) {
      return true;
    }

    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return tokenData.exp && tokenData.exp < now;
  }
}
