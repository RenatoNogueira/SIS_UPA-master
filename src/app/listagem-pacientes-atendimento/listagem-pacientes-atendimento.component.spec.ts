import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPacientesAtendimentoComponent } from './listagem-pacientes-atendimento.component';

describe('ListagemPacientesAtendimentoComponent', () => {
  let component: ListagemPacientesAtendimentoComponent;
  let fixture: ComponentFixture<ListagemPacientesAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPacientesAtendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPacientesAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
