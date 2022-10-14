import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ala-de-observacao',
  templateUrl: './ala-de-observacao.component.html',
  styleUrls: ['./ala-de-observacao.component.scss'],
})
export class AlaDeObservacaoComponent implements OnInit {
  evolucao = false;
  Evolucao() {
    this.evolucao = true;
    this.Prontuario = false;
  }

  Prontuario = true;
  prontuario(): void {
    this.Prontuario = true;
    this.evolucao = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
