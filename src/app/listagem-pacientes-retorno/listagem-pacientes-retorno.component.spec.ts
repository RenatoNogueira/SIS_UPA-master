import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPacientesRetornoComponent } from './listagem-pacientes-retorno.component';

describe('ListagemPacientesRetornoComponent', () => {
  let component: ListagemPacientesRetornoComponent;
  let fixture: ComponentFixture<ListagemPacientesRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPacientesRetornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPacientesRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
