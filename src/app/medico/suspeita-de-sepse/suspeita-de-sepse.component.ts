import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspeita-de-sepse',
  templateUrl: './suspeita-de-sepse.component.html',
  styleUrls: ['./suspeita-de-sepse.component.scss'],
})
export class SuspeitaDeSepseComponent implements OnInit {
  basic = false;
  sepse = [
    {
      proto: 'Protocolo',
      nome: 'Nome do Paciente',
      espec: 'Especialidade',
      situ: 'Situação',
      classRisco: 'Classificação de Risco',
      temp: 'Tempo',
      acao: 'Ação',
    },
  ];
  lista = [
    {
      numeroProto: '402208150003',
      paciente: 'JÉSSICA COSTA MENDES',
      especialidade: 'Clinica Médica',
      situacao: 'Suspeita de Sepse',
      classificacaoRisco: 'Verde',
      tempo: '9d 8h 7min',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
