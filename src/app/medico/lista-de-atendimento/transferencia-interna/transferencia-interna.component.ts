import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia-interna',
  templateUrl: './transferencia-interna.component.html',
  styleUrls: ['./transferencia-interna.component.scss'],
})
export class TransferenciaInternaComponent implements OnInit {
  procedimento = false;
  transfInter = false;
  constructor() {}
  procedimentoSelect(): void {
    this.procedimento = !this.procedimento;
  }
  transfInterna(): void {
    this.transfInter = !this.transfInter;
  }

  ngOnInit(): void {}
}
