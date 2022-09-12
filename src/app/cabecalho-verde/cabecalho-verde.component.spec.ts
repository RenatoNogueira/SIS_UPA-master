import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoVerdeComponent } from './cabecalho-verde.component';

describe('CabecalhoVerdeComponent', () => {
  let component: CabecalhoVerdeComponent;
  let fixture: ComponentFixture<CabecalhoVerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoVerdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
