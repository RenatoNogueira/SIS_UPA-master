import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pacientes-atendimento',
  templateUrl: './listagem-pacientes-atendimento.component.html',
  styleUrls: ['./listagem-pacientes-atendimento.component.scss']
})
export class ListagemPacientesAtendimentoComponent implements OnInit {

  basic = false;
  reavaliacao = false;
  constructor() { }


  ngOnInit(): void {
  }

}
