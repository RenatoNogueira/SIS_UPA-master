import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retorno',
  templateUrl: './retorno.component.html',
  styleUrls: ['./retorno.component.scss'],
})
export class RetornoComponent implements OnInit {
  mostraAvaliacao = false;

  outras = false;
  constructor() {}

  ngOnInit(): void {}
  mostraPacoteMedidas = false;
  mostrarPacoteMedidas() {
    this.mostraPacoteMedidas = !this.mostraPacoteMedidas;
  }
  mostrarAvaliacaoMedica = false;
  mostraAvaliacaoMedica() {
    this.mostrarAvaliacaoMedica = !this.mostrarAvaliacaoMedica;
  }
  reavalicao = false;
  mostraReavaliacao() {
    this.reavalicao = !this.reavalicao;
  }
  hAtendimento = false;
  exibir() {
    this.hAtendimento = !this.hAtendimento;
  }

  outra() {
    this.outras = !this.outras;
  }
}
