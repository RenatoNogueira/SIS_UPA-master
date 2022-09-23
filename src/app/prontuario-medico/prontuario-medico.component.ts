import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuario-medico',
  templateUrl: './prontuario-medico.component.html',
  styleUrls: ['./prontuario-medico.component.scss'],
})
export class ProntuarioMedicoComponent implements OnInit {
  mostraPacoteMedidas = false;
  mostraAvaliacao = false;
  mostrarAvaliacaoMedica = false;
  reavalicao = false;
  hAtendimento = false;
  constructor() {}

  ngOnInit(): void {}

  mostrarPacoteMedidas() {
    this.mostraPacoteMedidas = !this.mostraPacoteMedidas;
  }

  mostraAvaliacaoMedica() {
    this.mostrarAvaliacaoMedica = !this.mostrarAvaliacaoMedica;
  }

  mostraReavaliacao() {
    this.reavalicao = !this.reavalicao;
  }

  exibir() {
    this.hAtendimento = !this.hAtendimento;
  }
}
