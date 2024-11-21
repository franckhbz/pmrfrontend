import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('Token actual en localStorage:', token); // Verifica que el token esté en localStorage

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Imprime la solicitud después de clonar para incluir el token
      console.log('Solicitud con encabezado Authorization:', request.headers);
    } else {
      console.warn('No se encontró un token en localStorage.');
    }

    return next.handle(request);
  }
}
