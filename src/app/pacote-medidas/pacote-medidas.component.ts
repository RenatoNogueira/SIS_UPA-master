import { Component, OnInit } from '@angular/core';
import { FormsModule }      from '@angular/forms';

@Component({
  selector: 'app-pacote-medidas',
  templateUrl: './pacote-medidas.component.html',
  styleUrls: ['./pacote-medidas.component.scss'],

})

export class PacoteMedidasComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    imports: [FormsModule]
  }

}
