import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagamento } from 'app/models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiURL = 'http://localhost:8000'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getPagamentos(): Observable<any[]> {
    const url = `${this.apiURL}/api/pagamentos`;
    return this.http.get<any[]>(url);
  }
  getPagamento(id: number): Observable<Pagamento> {
    const url = `${this.apiURL}/api/pagamentos/${id}`;
    return this.http.get<Pagamento>(url);
  }
  putPagamento(id: number, funcionario: Pagamento): Observable<Pagamento> {
    const url = `${this.apiURL}/api/pagamentos/${id}`;
    return this.http.put<Pagamento>(url, funcionario);
  }
}