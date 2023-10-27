import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  mostrarPopupLogin = true
  ngOnInit(): void {
    this.mostrarPopupLogin = true    
  }
  constructor(private modalService: NgbModal) {}

  title = 'folha-de-pagamento';

  onLoginStatus(status: string) {
    if (status === 'Login bem-sucedido') {
      // Executar a lógica após um login bem-sucedido aqui.
      this.mostrarPopupLogin = false
    }
  }

  performLogoff() {
    // Implemente sua lógica de deslogar o usuário aqui.
    // Isso pode incluir a remoção de tokens de autenticação, limpeza de cookies, etc.
    // Após o logout, você pode redirecionar o usuário para a página de login ou fazer outras ações necessárias.
    
    // Exemplo simples:
    this.mostrarPopupLogin = true; // Define como verdadeiro após o logoff.
  }
}
