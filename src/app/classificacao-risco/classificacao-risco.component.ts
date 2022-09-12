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

  mostrarPacoteMedidas() {
    this.mostraPacoteMedidas = !this.mostraPacoteMedidas;
  }

  mostraEscalaGlasgow() {
    this.glasgow = !this.glasgow;
  }

  mostraEmergencia() {
    this.emergencia = !this.emergencia;
  }

  outras() {
    this.outrasDoencas = !this.outrasDoencas;
  }

  medicamentoEmUso() {
    this.medUso = !this.medUso;
  }
  medAlergia() {
    this.alergia = !this.alergia;
  }
  azul() {
    this.azulSelect = !this.azulSelect;
  }
  amarelo() {
    this.amareloSelect = !this.amareloSelect;
  }
  verde() {
    this.verdeSelect = !this.verdeSelect;
  }
  vermelha() {
    this.vermelhoSelect = !this.vermelhoSelect;
  }
}
