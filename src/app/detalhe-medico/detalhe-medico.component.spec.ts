import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMedicoComponent } from './detalhe-medico.component';

describe('DetalheMedicoComponent', () => {
  let component: DetalheMedicoComponent;
  let fixture: ComponentFixture<DetalheMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
