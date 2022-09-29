import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinais-vitais',
  templateUrl: './sinais-vitais.component.html',
  styleUrls: ['./sinais-vitais.component.scss'],
})
export class SinaisVitaisComponent implements OnInit {
  emergencia = true;
  constructor() {}

  // Campo Nível de Conci~encia (Sinais Vitais: )
  nivelConciencia: string[] = [
    'Alerta',
    'Resposta Verbal',
    'Dor',
    'Não Responsivel',
    'Confuso',
  ];
  NivelConciencia: string = 'Alerta';
  ngOnInit(): void {}
}
