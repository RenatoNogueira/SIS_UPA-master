import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoMedicaComponent } from './avaliacao-medica/avaliacao-medica.component';
import { CabecalhoDetalheMedicoComponent } from './cabecalho-detalhe-medico/cabecalho-detalhe-medico.component';
import { CabecalhoVerdeComponent } from './cabecalho-verde/cabecalho-verde.component';
import { ClassificacaoRiscoComponent } from './classificacao-risco/classificacao-risco.component';
import { DetalhesMedicoComponent } from './detalhes-medico/detalhes-medico.component';
import { ListaSuspeitaSepseComponent } from './lista-suspeita-sepse/lista-suspeita-sepse.component';
import { ListagemPacientesRetornoComponent } from './listagem-pacientes-retorno/listagem-pacientes-retorno.component';
import { PacientesAtendimentoComponent } from './pacientes-atendimento/pacientes-atendimento.component';
import { PrescricaoComponent } from './prescricao/prescricao.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';
import { ReavaliacaoComponent } from './reavaliacao/reavaliacao.component';

const routes: Routes = [
  { path: 'classificacao-risco', component: ClassificacaoRiscoComponent },
  { path: 'pacientes-atendimento', component: PacientesAtendimentoComponent },
  { path: 'lista-suspeita-sepse', component: ListaSuspeitaSepseComponent },
  { path: 'listagem-pacientes-retorno', component: ListagemPacientesRetornoComponent },
  { path: 'prontuario-medico ', component: ProntuarioMedicoComponent },
  { path: 'detalhes-medico', component: DetalhesMedicoComponent },
  { path: 'cabecalho-detalhe-medico', component: CabecalhoDetalheMedicoComponent },
  { path: 'prescricao', component: PrescricaoComponent },
  {path: 'reavaliacao', component: ReavaliacaoComponent},
  {path: 'cabecalho-verde', component: CabecalhoVerdeComponent},
  {path: 'avaliacao-medica', component: AvaliacaoMedicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
