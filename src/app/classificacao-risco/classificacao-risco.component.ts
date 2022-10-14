import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-classificacao-risco',
  templateUrl: './classificacao-risco.component.html',
  styleUrls: ['./classificacao-risco.component.scss'],
})
export class ClassificacaoRiscoComponent implements OnInit {
  emergencia = true;
  outrasDoencas = false;
  medUso = false;
  alergia = false;
  // campo Causa Extrema:*
  CausaExtrema: string[] = [
    'Acidente de Trabalho',
    'Acidente de transporte por água',
    'Acidente de Transporte Terrestre',
    'Acidentes de transporte aéreo e espacial',
    'Afogamento',
    'Agressão física',
    'Asfixia',
    'Atropelamento',
    'Choque eletrico',
    'Contrato com animais e plantas venenosos',
    'Envenenamento [intoxicação] acidental por e exposição à substâncias nocivas',
    'Esmagamento',
    'Exposição à fumaça, ao fogo e às chamas',
    'Exposição às forças da natureza',
    'Hipotermia',
    'Intoxicação exógena',
    'Intoxicação ou outra lesão/trauma de característica intencial',
    'Lesão autoprovocada',
    'Maus tratos',
    'Mordeduras de animais',
    'Não se aplica',
    'Outros acidentes de transporte e os não especificados',
    'Queda',
    'Violência Sexual',
  ];
  causaExtrema: string = 'Acidente de Trabalho';

  // Campos Escala de Glasgow
  aberturaOcular: string[] = [
    'Nenhuma',
    'Pressão de abertura dos olhos',
    'Ao comando verbal',
    'Espontâneo',
  ];
  AberturaOcular: string = 'Nenhuma';
  // ----------------------------------
  respostaVerbal: string[] = [
    'Nenhuma',
    'Som',
    'Palavras',
    'Desorientado',
    'Orientado e conversando',
  ];
  RespostaVerbal: string = 'Nenhuma';
  // ----------------------------------
  respostaMotora: string[] = [
    'Nenhuma',
    'Extenção',
    'Flexão anormal',
    'Flexão normal',
    'Localiza dor',
    'Ao comando',
  ];
  RespostaMotora: string = 'Nenhuma';
  constructor() {}

  ngOnInit(): void {
    imports: [FormsModule, NgForm];
  }
  mostraEmergencia(): void {
    this.emergencia = !this.emergencia;
  }

  outras(): void {
    this.outrasDoencas = !this.outrasDoencas;
  }

  medicamentoEmUso(): void {
    this.medUso = !this.medUso;
  }

  medAlergia(): void {
    this.alergia = !this.alergia;
  }
  // Seleciona classificação de risco Emergência por padrão
  checks = false;
  emergenciaSelect(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }

  disabled = true;
  button(e: any) {
    if (e.target.disabled == false) {
      this.disabled = !this.disabled;
    } else {
      this.disabled = true;
    }
  }
}
