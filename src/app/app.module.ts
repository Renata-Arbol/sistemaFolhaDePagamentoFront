import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaFuncionariosComponent } from './funcionarios/funcionarios.component';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { PopupLoginComponent } from './popup-login/popup-login.component'; //
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtualizarFuncionarioComponent } from './funcionarios/atualizar/atualizar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFuncionariosComponent,
    AtualizarFuncionarioComponent,
    LandingComponent,
    PopupLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicione o AppRoutingModule aos imports,
    HttpClientModule, // Adicione o HttpClientModule
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
