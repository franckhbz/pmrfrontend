import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {
  private apiUrl = `${environment.apiUrl}/transacciones`;

  constructor(private http: HttpClient) {}

  createTransaccion(transaccion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, transaccion);
  }
}
