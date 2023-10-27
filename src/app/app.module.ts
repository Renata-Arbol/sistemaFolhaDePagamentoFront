import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaFuncionariosComponent } from './funcionarios/funcionarios.component';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtualizarFuncionarioComponent } from './funcionarios/atualizar/atualizar-funcionario.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor'; // Importe o interceptor aqui
import { AuthService } from './auth.service';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ListaFuncionariosComponent,
    AtualizarFuncionarioComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicione o AppRoutingModule aos imports,
    HttpClientModule, // Adicione o HttpClientModule
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          // Retorna o token JWT armazenado no sessionStorage (ou localStorage, se você preferir)
          return sessionStorage.getItem('token');
        },
        allowedDomains: ['example.com'], // Domínios permitidos para validação do token (opcional)
        disallowedRoutes: ['example.com/unauthorized'], // Rotas a serem ignoradas durante a validação (opcional)
      },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideAnimations(), // required animations providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
