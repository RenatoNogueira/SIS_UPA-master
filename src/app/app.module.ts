import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ClassificacaoRiscoComponent } from './classificacao-risco/classificacao-risco.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListagemPacientesAtendimentoComponent } from './listagem-pacientes-atendimento/listagem-pacientes-atendimento.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';
import { DetalheMedicoComponent } from './detalhe-medico/detalhe-medico.component';
import { DetalhesMedicoComponent } from './detalhes-medico/detalhes-medico.component';
import { CabecalhoDetalheMedicoComponent } from './cabecalho-detalhe-medico/cabecalho-detalhe-medico.component';
import { OpcoesCausaExternaComponent } from './opcoes-causa-externa/opcoes-causa-externa.component';
import { PacoteMedidasComponent } from './pacote-medidas/pacote-medidas.component';
import { ReavaliacaoComponent } from './reavaliacao/reavaliacao.component';
import { CabecalhoVerdeComponent } from './cabecalho-verde/cabecalho-verde.component';
import { PrescriacaoAntibioticoComponent } from './pacote-medidas/prescriacao-antibiotico/prescriacao-antibiotico.component';
import { HistoricoAtendimentoComponent } from './prontuario-medico/historico-atendimento/historico-atendimento.component';
import { EnfermagemComponent } from './enfermagem/enfermagem.component';
import { MedicacaoComponent } from './enfermagem/medicacao/medicacao.component';
import { ExameComponent } from './enfermagem/exame/exame.component';
import { AdminComponent } from './admin/admin.component';
import { SinaisVitaisComponent } from './classificacao-risco/sinais-vitais/sinais-vitais.component';
import { MedicoComponent } from './medico/medico.component';
import { ListaDeAtendimentoComponent } from './medico/lista-de-atendimento/lista-de-atendimento.component';
import { ListaDeRetornoComponent } from './medico/lista-de-retorno/lista-de-retorno.component';
import { SuspeitaDeSindromeGripalComponent } from './medico/suspeita-de-sindrome-gripal/suspeita-de-sindrome-gripal.component';
import { SuspeitaDeSepseComponent } from './medico/suspeita-de-sepse/suspeita-de-sepse.component';
import { AlaDeObservacaoComponent } from './medico/ala-de-observacao/ala-de-observacao.component';
import { RetornoComponent } from './medico/lista-de-retorno/retorno/retorno.component';
import { EvolucaoComponent } from './medico/ala-de-observacao/evolucao/evolucao.component';
import { TransferenciaInternaComponent } from './medico/lista-de-atendimento/transferencia-interna/transferencia-interna.component';
import { ProcedimentoComponent } from './medico/lista-de-atendimento/procedimento/procedimento.component';
import { ProcedimentoFormComponent } from './medico/lista-de-atendimento/procedimento/procedimento-form/procedimento-form.component';
import { TransferenciaInternaFormComponent } from './medico/lista-de-atendimento/transferencia-interna/transferencia-interna-form/transferencia-interna-form.component';
import { ProntuarioComponent } from './medico/lista-de-atendimento/prontuario/prontuario.component';
import { ProntuarioFormComponent } from './medico/lista-de-atendimento/prontuario/prontuario-form/prontuario-form.component';
import { ServicoSocialComponent } from './servico-social/servico-social.component';
import { SocialComponent } from './servico-social/social/social.component';
import { SocialFormComponent } from './servico-social/social/social-form/social-form.component';
import { RecepcaoComponent } from './servico-social/recepcao/recepcao.component';
import { RecepcaoFormComponent } from './servico-social/recepcao/recepcao-form/recepcao-form.component';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    ClassificacaoRiscoComponent,
    HeaderComponent,
    SidebarComponent,
    ListagemPacientesAtendimentoComponent,
    ProntuarioMedicoComponent,
    DetalheMedicoComponent,
    DetalhesMedicoComponent,
    CabecalhoDetalheMedicoComponent,
    OpcoesCausaExternaComponent,
    PacoteMedidasComponent,
    ReavaliacaoComponent,
    CabecalhoVerdeComponent,
    PrescriacaoAntibioticoComponent,
    HistoricoAtendimentoComponent,
    EnfermagemComponent,
    MedicacaoComponent,
    ExameComponent,
    AdminComponent,
    SinaisVitaisComponent,
    MedicoComponent,
    ListaDeAtendimentoComponent,
    ListaDeRetornoComponent,
    SuspeitaDeSindromeGripalComponent,
    SuspeitaDeSepseComponent,
    AlaDeObservacaoComponent,
    RetornoComponent,
    EvolucaoComponent,
    TransferenciaInternaComponent,
    ProcedimentoComponent,
    ProcedimentoFormComponent,
    TransferenciaInternaFormComponent,
    ProntuarioComponent,
    ProntuarioFormComponent,
    ServicoSocialComponent,
    SocialComponent,
    SocialFormComponent,
    RecepcaoComponent,
    RecepcaoFormComponent,
  ],

  imports: [
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
