import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia-interna-form',
  templateUrl: './transferencia-interna-form.component.html',
  styleUrls: ['./transferencia-interna-form.component.scss'],
})
export class TransferenciaInternaFormComponent implements OnInit {
  encaminhar: string[] = [
    'Sala Vermelha',
    'Sala Amarela',
    'Observação Pediátrica',
    'Serviço Social',
  ];
  Encaminhar: string = 'Sala Vermelha';

  constructor() {}

  ngOnInit(): void {}
}
