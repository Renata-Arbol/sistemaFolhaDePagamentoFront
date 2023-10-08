import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupLoginComponent } from './popup-login/popup-login.component';

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

  openLoginModal() {
    const modalRef = this.modalService.open(PopupLoginComponent, { centered: true });
    
    // Inscreva-se no evento loginStatus após abrir o modal.
    modalRef.componentInstance.loginStatus.subscribe((status: string) => {
      this.onLoginStatus(status);
    });
  }

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
