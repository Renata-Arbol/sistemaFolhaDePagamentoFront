import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importe o serviço de autenticação aqui
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable() // Adicione o decorador @Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router,
    private jwtHelper: JwtHelperService ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const token = sessionStorage.getItem('token');
    if(!this.jwtHelper.isTokenExpired(token)){
      this.router.navigate(['/']);
      return of(); // 
    }
    
    if (this.authService.isAuthenticatedUser()) {
      return next.handle(req);
    } else {
      if (req.url.includes('/login') ) {
         return next.handle(req);
        }else{
          this.router.navigate(['/']);
          return of(); // 
        }
    }
  }
}
