import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuario-medico',
  templateUrl: './prontuario-medico.component.html',
  styleUrls: ['./prontuario-medico.component.scss'],
})
export class ProntuarioMedicoComponent implements OnInit {
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
  outras = false;
  outra() {
    this.outras = !this.outras;
  }
}
