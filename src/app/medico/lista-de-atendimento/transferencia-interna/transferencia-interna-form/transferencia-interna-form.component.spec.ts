import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaInternaFormComponent } from './transferencia-interna-form.component';

describe('TransferenciaInternaFormComponent', () => {
  let component: TransferenciaInternaFormComponent;
  let fixture: ComponentFixture<TransferenciaInternaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaInternaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaInternaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
