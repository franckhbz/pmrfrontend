import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del almacenamiento local o donde lo guardes
    const token = localStorage.getItem('token'); // También puedes usar sessionStorage o un servicio centralizado

    if (token) {
      // Clonar la solicitud para agregar el encabezado Authorization
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Pasar la solicitud clonada al siguiente manejador
      return next.handle(authReq);
    }

    // Si no hay token, enviar la solicitud original
    return next.handle(req);
  }
}
