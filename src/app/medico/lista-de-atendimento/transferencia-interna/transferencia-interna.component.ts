import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia-interna',
  templateUrl: './transferencia-interna.component.html',
  styleUrls: ['./transferencia-interna.component.scss'],
})
export class TransferenciaInternaComponent implements OnInit {
  constructor() {}
  procedimento = false;
  procedimentoSelect(): void {
    this.procedimento = !this.procedimento;
  }
  transfInter = false;
  transfInterna(): void {
    this.transfInter = !this.transfInter;
  }

  ngOnInit(): void {}
}
