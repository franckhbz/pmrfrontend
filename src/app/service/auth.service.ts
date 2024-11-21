import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/agents`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        
      })
    );
  }
  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    console.log('Token encontrado:', token);
    return token !== null && token !== undefined;
  }

  register(name: string, email: string, password: string, station: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      name,
      email,
      password,
      station,
    });
  }
}
