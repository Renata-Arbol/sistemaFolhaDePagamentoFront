import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importe 'Observable' e 'of'
import { catchError, map } from 'rxjs/operators'; // Importe 'catchError' e 'map'
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.loginService.registraPonto(username, password).pipe(
      map((result) => {
          const token = result['token'];
          sessionStorage.setItem('token', token);
//          this.toastr.success('Olá', 'Bem');
          this.isAuthenticated = true;
          this.router.navigate(['/funcionarios']);
          return true;
          

      }),
      catchError((error) => {
  //      this.toastr.error('Verifique seu usuário e senha', 'Error');
        this.isAuthenticated = false;
        return of(false);
      })
    );
  }

  isAuthenticatedUser(): boolean {
    const tokenArmazenado = sessionStorage.getItem('token');
    if ( tokenArmazenado == null|| tokenArmazenado == undefined ||tokenArmazenado == "undefined") {
      this.isAuthenticated = false;
      sessionStorage.clear();
    
    //  this.toastr.error('Verifique seu usuário e senha', 'Error');
      return false;
   }
   return true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
