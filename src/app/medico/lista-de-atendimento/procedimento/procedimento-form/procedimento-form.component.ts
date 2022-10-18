import { Component, OnInit } from '@angular/core';
import { ɵBrowserAnimationBuilder } from '@angular/platform-browser/animations';
import { ClrSelectedState } from '@clr/angular';

@Component({
  selector: 'app-procedimento-form',
  templateUrl: './procedimento-form.component.html',
  styleUrls: ['./procedimento-form.component.scss'],
})
export class ProcedimentoFormComponent implements OnInit {
  disabled = false;
  buttonNot(e: any) {
    if (e.target.disabled == false) {
      this.disabled = !this.disabled;
    } else {
      this.disabled = false;
    }
  }
  disable = false;
  buttonYes(e: any) {
    if (e.target.disabled == false) {
      this.disable = !this.disable;
    } else {
      this.disable = false;
    }
  }

  procedimentoRoot = [
    {
      name: 'PROCEDIMENTO',
      selected: ClrSelectedState,
      files: [
        {
          name: 'Curativo Grau II',
          selected: ClrSelectedState,
        },
        {
          name: 'Debridamento de Ulcera / Necrose',
          selected: ClrSelectedState,
        },
        {
          name: 'Drenagem de Abscesso da Boca e Anexos',
          selected: ClrSelectedState,
        },
        {
          name: 'Excisao de Lesão E/OU Sutura de Ferimento da Pele',
          selected: ClrSelectedState,
        },
        {
          name: 'Excisão e Sutura de Lesão na Boca',
          selected: ClrSelectedState,
        },
        {
          name: 'Exerese de Tumor de Pele e Anexos',
          selected: ClrSelectedState,
        },
        {
          name: 'Incisão e Drenagem de Abscesso',
          selected: ClrSelectedState,
        },
        {
          name: 'Retirada de Corpo Estranho Subcutâneo',
          selected: ClrSelectedState,
        },
      ],
    },
  ];
  getChildren = (folder: { files: any }) => folder.files;
  constructor() {
    ɵBrowserAnimationBuilder;
  }
  acessoRapido = false;
  toggle(): void {
    this.acessoRapido = !this.acessoRapido;
  }
  imobilizacaoOrtopedica = false;
  imobilicacaoYes(): void {
    this.imobilizacaoOrtopedica = !this.imobilizacaoOrtopedica;
  }
  imobilizacaoOrtopedicaNo = false;
  imobilicacaoNo(): void {
    this.imobilizacaoOrtopedicaNo = !this.imobilizacaoOrtopedicaNo;
  }

  ngOnInit(): void {}
}
