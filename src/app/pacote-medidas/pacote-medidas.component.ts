import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacote-medidas',
  templateUrl: './pacote-medidas.component.html',
  styleUrls: ['./pacote-medidas.component.scss'],
})
export class PacoteMedidasComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    imports: [FormsModule];
  }

  /* Foco Abdominal */
  ceftriaxona = false;
  Ceftriaxona(): void {
    this.ceftriaxona = !this.ceftriaxona;
  }
  ciprofloxacino = false;
  Ciprofloxacino(): void {
    this.ciprofloxacino = !this.ciprofloxacino;
  }
  metronidazol = false;
  Metronidazol(): void {
    this.metronidazol = !this.metronidazol;
  }
  piperacilina = false;
  Piperacilina(): void {
    this.piperacilina = !this.piperacilina;
  }
  /* Foco Partes Moles */

  /* Foco Pulmonar */

  /* Foco Urinário */

  checks = false;
  kitSepse(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }
}
