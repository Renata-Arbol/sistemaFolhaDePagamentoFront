import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PagamentoService } from '../../../services/pagamentos.service';
import { RegistroPontoService } from '../../../services/registro-ponto.service';
import { Router } from '@angular/router';
import { Pagamento } from 'app/models/pagamento';
@Component({
  selector: 'app-lista-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements  OnInit {


  pagamento: Pagamento;

  constructor(private pagamentoService: PagamentoService, private registroPonto: RegistroPontoService, private router: Router) { }

  ngOnInit(): void {
    this.carregarPagamento();
  }

  private carregarPagamento(): void {
    this.pagamentoService.getPagamento(1).subscribe(
      (data) => {
        this.pagamento = data;
      },
      (error) => {
        console.error('Erro ao carregar os funcionários:', error);
      }
    );
  }

  redirectToEdit(funcionarioId: number): void {
    this.router.navigate([`/pagamento/funcionario/${funcionarioId}`]);
  }
  
  editarFuncionario(id: number): void {
    // Implemente a lógica para editar um funcionário com o ID fornecido.
  }

  excluirFuncionario(id: number): void {
    // Implemente a lógica para excluir um funcionário com o ID fornecido.
  }
}
