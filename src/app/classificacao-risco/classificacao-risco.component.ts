import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-classificacao-risco',
  templateUrl: './classificacao-risco.component.html',
  styleUrls: ['./classificacao-risco.component.scss'],

})

export class ClassificacaoRiscoComponent implements OnInit {

  mostraPacoteMedidas = false;
  mostraAvaliacao = false;
  glasgow = false;
  emergencia = true;
  outrasDoencas = false;
  medUso = true;
  alergia = true;
  azulSelect = false;
  amareloSelect = false;
  verdeSelect = false;
  vermelhoSelect = false;

  constructor() {}

  ngOnInit(): void {}

  mostrarPacoteMedidas(): void {
    this.mostraPacoteMedidas = !this.mostraPacoteMedidas;
  }

  mostraEscalaGlasgow(): void {
    this.glasgow = !this.glasgow;
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
  azul(): void {
    this.azulSelect = !this.azulSelect;
  }
  amarelo(): void {
    this.amareloSelect = !this.amareloSelect;
  }
  verde(): void {
    this.verdeSelect = !this.verdeSelect;
  }
  vermelha(): void {
    this.vermelhoSelect = !this.vermelhoSelect;
  }
}
