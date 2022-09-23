import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacote-medidas',
  templateUrl: './pacote-medidas.component.html',
  styleUrls: ['./pacote-medidas.component.scss'],
})
export class PacoteMedidasComponent implements OnInit {
  ceftriaxona = false;
  ciprofloxacino = false;
  metronidazol = false;
  piperacilina = false;
  constructor() {}
  ngOnInit(): void {
    imports: [FormsModule];
  }

  Ceftriaxona(): void {
    this.ceftriaxona = !this.ceftriaxona;
  }

  Ciprofloxacino(): void {
    this.ciprofloxacino = !this.ciprofloxacino;
  }

  Metronidazol(): void {
    this.metronidazol = !this.metronidazol;
  }

  Piperacilina(): void {
    this.piperacilina = !this.piperacilina;
  }

  checks = false;
  todos(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }
}
