import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-social',
  templateUrl: './servico-social.component.html',
  styleUrls: ['./servico-social.component.scss'],
})
export class ServicoSocialComponent implements OnInit {
  recepcao = true;
  Recepcao() {
    this.recepcao = true;
    this.social = false;
  }
  social = false;
  Social() {
    this.social = true;
    this.recepcao = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
