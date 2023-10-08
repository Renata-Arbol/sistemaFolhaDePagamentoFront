import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
})
export class PopupLoginComponent {
  constructor(public modalService: NgbModal, public loginService: LoginService,private router: Router) { }
  username: string = '';
  password: string = '';
  @Output() loginStatus = new EventEmitter<string>();

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submitLogin() {
    console.log("asd")
    const username = this.username;
    const password = this.password;
    // Agora você pode usar 'username' e 'password' para enviar para o serviço de login
    this.loginService.registraPonto(username, password).subscribe(
      (result) => {
        // Lidar com o resultado da autenticação
        console.log(result['token']);
        // Emitir evento de login bem-sucedido, se aplicável
        this.loginStatus.emit('Login bem-sucedido');
        // Fechar o modal
        this.modalService.dismissAll('Login bem-sucedido');
        const token = result['token'];

        // Use sessionStorage ou localStorage para armazenar o token
        // Você pode escolher o método com base nos requisitos do seu aplicativo
        // sessionStorage armazena os dados apenas durante a sessão atual do navegador
        // localStorage armazena os dados permanentemente (até que sejam excluídos pelo usuário ou pelo aplicativo)
        sessionStorage.setItem('token', token);
        // Ou use localStorage para armazenar permanentemente
        // localStorage.setItem('token', token);

        // Para recuperar o token da sessão
        const tokenArmazenado = sessionStorage.getItem('token');
        // Ou do localStorage
        // const tokenArmazenado = localStorage.getItem('token');

        if (tokenArmazenado) {
          console.log('Token recuperado:', tokenArmazenado);
        } else {
          console.log('Nenhum token encontrado na sessão.');
        }
        this.router.navigate(['/funcionarios']);
      },
      (error) => {
        // Lidar com erros de autenticação
        console.error(error);
        // Exibir mensagem de erro para o usuário, se aplicável
        // Por exemplo: this.errorMessage = 'Credenciais inválidas';
      }
    );
  }
}