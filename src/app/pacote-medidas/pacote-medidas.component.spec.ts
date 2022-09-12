import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteMedidasComponent } from './pacote-medidas.component';

describe('PacoteMedidasComponent', () => {
  let component: PacoteMedidasComponent;
  let fixture: ComponentFixture<PacoteMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacoteMedidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacoteMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
