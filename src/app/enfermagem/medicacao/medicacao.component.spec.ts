import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacaoComponent } from './medicacao.component';

describe('MedicacaoComponent', () => {
  let component: MedicacaoComponent;
  let fixture: ComponentFixture<MedicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
