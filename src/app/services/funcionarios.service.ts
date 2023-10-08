import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from 'app/models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private apiURL = 'http://localhost:8000'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<any[]> {
    const url = `${this.apiURL}/api/funcionarios`;
    return this.http.get<any[]>(url);
  }
  getFuncionario(id: number): Observable<Funcionario> {
    const url = `${this.apiURL}/api/funcionarios/${id}`;
    return this.http.get<Funcionario>(url);
  }
  putFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.apiURL}/api/funcionarios/${id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }
}