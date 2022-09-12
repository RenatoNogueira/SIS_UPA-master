import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAtendimentoComponent } from './pacientes-atendimento.component';

describe('PacientesAtendimentoComponent', () => {
  let component: PacientesAtendimentoComponent;
  let fixture: ComponentFixture<PacientesAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesAtendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
