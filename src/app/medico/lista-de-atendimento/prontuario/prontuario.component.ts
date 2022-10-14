import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.scss'],
})
export class ProntuarioComponent implements OnInit {
  procedimento = false;
  procedimentoSelect(): void {
    this.procedimento = true;
    this.transfInter = false;
    this.Prontuario = false;
  }
  transfInter = false;
  transfInterna(): void {
    this.transfInter = true;
    this.procedimento = false;
    this.Prontuario = false;
  }

  Prontuario = true;
  prontuario(): void {
    this.Prontuario = true;
    this.transfInter = false;
    this.procedimento = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
