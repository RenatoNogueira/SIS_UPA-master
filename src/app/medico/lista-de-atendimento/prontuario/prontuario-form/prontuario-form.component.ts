import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuario-form',
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.scss'],
})
export class ProntuarioFormComponent implements OnInit {
  hAtendimento = false;
  exibir() {
    this.hAtendimento = !this.hAtendimento;
  }
  constructor() {}

  ngOnInit(): void {}
}
