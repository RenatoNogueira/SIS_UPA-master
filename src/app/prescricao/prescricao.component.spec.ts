import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescricaoComponent } from './prescricao.component';

describe('PrescricaoComponent', () => {
  let component: PrescricaoComponent;
  let fixture: ComponentFixture<PrescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescricaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
