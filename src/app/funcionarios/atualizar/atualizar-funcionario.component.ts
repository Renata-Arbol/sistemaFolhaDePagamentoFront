import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios.service';
import { RegistroPontoService } from '../../services/registro-ponto.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from 'app/models/funcionario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements  OnInit {
  funcionarioForm: FormGroup = this.fb.group({});

  funcionario: Funcionario;

  constructor(private funcionariosService: FuncionariosService, private registroPonto: RegistroPontoService,
    private route: ActivatedRoute, private fb: FormBuilder) { 
      this.funcionario = new Funcionario();
    }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.carregarFuncionarios(id);
    this.funcionarioForm = this.fb.group({
      id: [''],
      nome: [''],
      dataNascimento: [''],
      documentoId: [''],
      documento: this.fb.group({
        id: [''],
        rg: [''],
        cpf: ['']
      }),
      contatos: [''],
      dependentes: [''],
      funcionariosCargos: [''],
      telefones: [''],
      enderecos: [''],
      empresaId: [''],
      empresa: ['']
    });
  }

  private carregarFuncionarios(id: any): void {
    this.funcionariosService.getFuncionario(id).subscribe(
        (data: Funcionario) => {
            if (data.dataNascimento) {
                data.dataNascimento = data.dataNascimento.split('T')[0];
            }
            this.funcionario = data;
            this.funcionarioForm.patchValue(data);
        },
        (error) => {
            console.error('Erro ao carregar os funcionários:', error);
        }
    );
}


  editarFuncionario(id: any, funcionario: Funcionario): void {
    {
      this.funcionariosService.putFuncionario(id, funcionario).subscribe(
          (data: Funcionario) => {
              if (data.dataNascimento) {
                  data.dataNascimento = data.dataNascimento.split('T')[0];
              }
              this.funcionario = data;
              this.funcionarioForm.patchValue(data);
          },
          (error) => {
              console.error('Erro ao carregar os funcionários:', error);
          }
      );
    // Implemente a lógica para editar um funcionário com o ID fornecido.
  }
}

  excluirFuncionario(id: number): void {
    // Implemente a lógica para excluir um funcionário com o ID fornecido.
  }
}
