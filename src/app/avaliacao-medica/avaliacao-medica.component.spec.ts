import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoMedicaComponent } from './avaliacao-medica.component';

describe('AvaliacaoMedicaComponent', () => {
  let component: AvaliacaoMedicaComponent;
  let fixture: ComponentFixture<AvaliacaoMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoMedicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
