import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { RegistroPontoService } from '../services/registro-ponto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class ListaFuncionariosComponent implements  OnInit {


  funcionarios: any[] = [];

  constructor(private funcionariosService: FuncionariosService, private registroPonto: RegistroPontoService, private router: Router) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  private carregarFuncionarios(): void {
    this.funcionariosService.getFuncionarios().subscribe(
      (data) => {
        this.funcionarios = data;
      },
      (error) => {
        console.error('Erro ao carregar os funcionários:', error);
      }
    );
  }

  redirectToEdit(funcionarioId: number): void {
    this.router.navigate([`/funcionarios/funcionario/${funcionarioId}`]);
  }
  
  editarFuncionario(id: number): void {
    // Implemente a lógica para editar um funcionário com o ID fornecido.
  }

  excluirFuncionario(id: number): void {
    // Implemente a lógica para excluir um funcionário com o ID fornecido.
  }
}
