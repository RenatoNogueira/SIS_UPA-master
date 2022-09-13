import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriacaoAntibioticoComponent } from './prescriacao-antibiotico.component';

describe('PrescriacaoAntibioticoComponent', () => {
  let component: PrescriacaoAntibioticoComponent;
  let fixture: ComponentFixture<PrescriacaoAntibioticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriacaoAntibioticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriacaoAntibioticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
