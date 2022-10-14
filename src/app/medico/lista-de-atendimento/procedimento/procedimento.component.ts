import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-procedimento',
  templateUrl: './procedimento.component.html',
  styleUrls: ['./procedimento.component.scss'],
})
export class ProcedimentoComponent implements OnInit {
  constructor() {}

  procedimento = false;
  procedimentoSelect(): void {
    this.procedimento = true;
    this.transfInter = false;
  }
  transfInter = false;
  transfInterna(): void {
    this.transfInter = true;
    this.procedimento = false;
  }
  ngOnInit(): void {}
}
