import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoComponent } from './evolucao.component';

describe('EvolucaoComponent', () => {
  let component: EvolucaoComponent;
  let fixture: ComponentFixture<EvolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
