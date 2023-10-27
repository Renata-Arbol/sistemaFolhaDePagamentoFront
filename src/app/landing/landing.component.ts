import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { RegistroPontoService } from '../services/registro-ponto.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit{
  constructor( public authService: AuthService,private router: Router) { }
  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  ngAfterViewInit() { 
  }
  submitLogin() {
    const username = this.username;
    const password = this.password;
    // Agora você pode usar 'username' e 'password' para enviar para o serviço de login
    this.authService.login(username, password).subscribe();
  }
}
