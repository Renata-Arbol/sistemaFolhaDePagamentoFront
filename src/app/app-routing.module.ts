import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFuncionariosComponent } from './funcionarios/funcionarios.component';
import { LandingComponent } from './landing/landing.component';
import { AtualizarFuncionarioComponent } from './funcionarios/atualizar/atualizar-funcionario.component';
import { PagamentoComponent } from './funcionarios/pagamentos/pagamento/pagamento.component';
//import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';
//import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Rota padrão
  { path: 'funcionarios', component: ListaFuncionariosComponent },
  { path: 'funcionarios/:id', component: AtualizarFuncionarioComponent},
  { path: 'funcionarios/:id/pagamentos/:idpagamento', component: PagamentoComponent}
  //,{ path: 'criar-funcionario', component: CriarFuncionarioComponent },
  //{ path: 'editar-funcionario/:id', component: EditarFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }