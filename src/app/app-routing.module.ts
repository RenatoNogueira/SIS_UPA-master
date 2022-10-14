import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CabecalhoDetalheMedicoComponent } from './cabecalho-detalhe-medico/cabecalho-detalhe-medico.component';
import { CabecalhoVerdeComponent } from './cabecalho-verde/cabecalho-verde.component';
import { ClassificacaoRiscoComponent } from './classificacao-risco/classificacao-risco.component';
import { DetalhesMedicoComponent } from './detalhes-medico/detalhes-medico.component';
import { EnfermagemComponent } from './enfermagem/enfermagem.component';
import { ExameComponent } from './enfermagem/exame/exame.component';
import { MedicacaoComponent } from './enfermagem/medicacao/medicacao.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';
import { ReavaliacaoComponent } from './reavaliacao/reavaliacao.component';
import { SuspeitaDeSepseComponent } from './medico/suspeita-de-sepse/suspeita-de-sepse.component';
import { ListaDeRetornoComponent } from './medico/lista-de-retorno/lista-de-retorno.component';
import { RetornoComponent } from './medico/lista-de-retorno/retorno/retorno.component';
import { ProcedimentoComponent } from './medico/lista-de-atendimento/procedimento/procedimento.component';
import { ListaDeAtendimentoComponent } from './medico/lista-de-atendimento/lista-de-atendimento.component';
import { ProcedimentoFormComponent } from './medico/lista-de-atendimento/procedimento/procedimento-form/procedimento-form.component';
import { TransferenciaInternaComponent } from './medico/lista-de-atendimento/transferencia-interna/transferencia-interna.component';
import { TransferenciaInternaFormComponent } from './medico/lista-de-atendimento/transferencia-interna/transferencia-interna-form/transferencia-interna-form.component';
import { ProntuarioComponent } from './medico/lista-de-atendimento/prontuario/prontuario.component';
import { AlaDeObservacaoComponent } from './medico/ala-de-observacao/ala-de-observacao.component';
import { EvolucaoComponent } from './medico/ala-de-observacao/evolucao/evolucao.component';
import { ServicoSocialComponent } from './servico-social/servico-social.component';
import { RecepcaoComponent } from './servico-social/recepcao/recepcao.component';
import { SocialComponent } from './servico-social/social/social.component';
import { SocialFormComponent } from './servico-social/social/social-form/social-form.component';
import { RecepcaoFormComponent } from './servico-social/recepcao/recepcao-form/recepcao-form.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'classificacao-risco', component: ClassificacaoRiscoComponent },
  { path: 'prontuario-medico ', component: ProntuarioMedicoComponent },
  { path: 'detalhes-medico', component: DetalhesMedicoComponent },
  {
    path: 'cabecalho-detalhe-medico',
    component: CabecalhoDetalheMedicoComponent,
  },
  { path: 'reavaliacao', component: ReavaliacaoComponent },
  { path: 'cabecalho-verde', component: CabecalhoVerdeComponent },
  { path: 'enfermagem', component: EnfermagemComponent },
  { path: 'medicacao', component: MedicacaoComponent },
  { path: 'exame', component: ExameComponent },
  { path: 'suspeita-de-sepse', component: SuspeitaDeSepseComponent },
  { path: 'lista-de-retorno', component: ListaDeRetornoComponent },
  { path: 'retorno', component: RetornoComponent },
  { path: 'lista-de-atendimento', component: ListaDeAtendimentoComponent },
  { path: 'procedimento', component: ProcedimentoComponent },
  { path: 'procedimento-form', component: ProcedimentoFormComponent },
  { path: 'transferencia-interna', component: TransferenciaInternaComponent },
  {
    path: 'transferencia-interna-form',
    component: TransferenciaInternaFormComponent,
  },
  { path: 'prontuario', component: ProntuarioComponent },
  { path: 'ala-de-observacao', component: AlaDeObservacaoComponent },
  { path: 'evolucao', component: EvolucaoComponent },
  { path: 'servico-social', component: ServicoSocialComponent },
  { path: 'recepcao', component: RecepcaoComponent },
  { path: 'recepcao-form', component: RecepcaoFormComponent },
  { path: 'social', component: SocialComponent },
  { path: 'social-form', component: SocialFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
