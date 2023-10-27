import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://localhost:8000'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }


  registraPonto(usuario: string, senha: string): Observable<any> {
    const url = `${this.apiURL}/api/login`; // Substitua pela URL da rota de login do seu backend
    // Crie um objeto com os dados do usuário e senha
    const body = {
      Usuario: usuario,
      Senha: senha
    };

    return this.http.post<any>(url, body);
  }
}