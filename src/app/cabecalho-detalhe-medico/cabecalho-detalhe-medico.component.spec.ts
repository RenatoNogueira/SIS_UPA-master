import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoDetalheMedicoComponent } from './cabecalho-detalhe-medico.component';

describe('CabecalhoDetalheMedicoComponent', () => {
  let component: CabecalhoDetalheMedicoComponent;
  let fixture: ComponentFixture<CabecalhoDetalheMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoDetalheMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoDetalheMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
