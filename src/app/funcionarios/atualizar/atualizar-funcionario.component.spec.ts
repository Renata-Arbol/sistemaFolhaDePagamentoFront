import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFuncionarioComponent } from './atualizar-funcionario.component';

describe('ListaFuncionariosComponent', () => {
  let component: AtualizarFuncionarioComponent;
  let fixture: ComponentFixture<AtualizarFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarFuncionarioComponent]
    });
    fixture = TestBed.createComponent(AtualizarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
