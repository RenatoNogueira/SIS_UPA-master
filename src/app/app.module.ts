import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { ClassificacaoRiscoComponent } from './classificacao-risco/classificacao-risco.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PacientesAtendimentoComponent } from './pacientes-atendimento/pacientes-atendimento.component';
import { ListaSuspeitaSepseComponent } from './lista-suspeita-sepse/lista-suspeita-sepse.component';
import { ListagemPacientesRetornoComponent } from './listagem-pacientes-retorno/listagem-pacientes-retorno.component';
import { ListagemPacientesAtendimentoComponent } from './listagem-pacientes-atendimento/listagem-pacientes-atendimento.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';
import { DetalheMedicoComponent } from './detalhe-medico/detalhe-medico.component';
import { DetalhesMedicoComponent } from './detalhes-medico/detalhes-medico.component';
import { CabecalhoDetalheMedicoComponent } from './cabecalho-detalhe-medico/cabecalho-detalhe-medico.component';
import { OpcoesCausaExternaComponent } from './opcoes-causa-externa/opcoes-causa-externa.component';
import { PrescricaoComponent } from './prescricao/prescricao.component';
import { PacoteMedidasComponent } from './pacote-medidas/pacote-medidas.component';
import { ReavaliacaoComponent } from './reavaliacao/reavaliacao.component';
import { CabecalhoVerdeComponent } from './cabecalho-verde/cabecalho-verde.component';
import { AvaliacaoMedicaComponent } from './avaliacao-medica/avaliacao-medica.component';
import { PrescriacaoAntibioticoComponent } from './pacote-medidas/prescriacao-antibiotico/prescriacao-antibiotico.component';
;

@NgModule({
  declarations: [
    AppComponent,
    ClassificacaoRiscoComponent,
    HeaderComponent,
    SidebarComponent,
    PacientesAtendimentoComponent,
    ListaSuspeitaSepseComponent,
    ListagemPacientesRetornoComponent,
    ListagemPacientesAtendimentoComponent,
    ProntuarioMedicoComponent,
    DetalheMedicoComponent,
    DetalhesMedicoComponent,
    CabecalhoDetalheMedicoComponent,
    OpcoesCausaExternaComponent,
    PrescricaoComponent,
    PacoteMedidasComponent,
    ReavaliacaoComponent,
    CabecalhoVerdeComponent,
    AvaliacaoMedicaComponent,
    PrescriacaoAntibioticoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
