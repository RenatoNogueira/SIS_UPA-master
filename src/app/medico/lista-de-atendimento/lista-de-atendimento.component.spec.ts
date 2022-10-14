import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAtendimentoComponent } from './lista-de-atendimento.component';

describe('ListaDeAtendimentoComponent', () => {
  let component: ListaDeAtendimentoComponent;
  let fixture: ComponentFixture<ListaDeAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAtendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
