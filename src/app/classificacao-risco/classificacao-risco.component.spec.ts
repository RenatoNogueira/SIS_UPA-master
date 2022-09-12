import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoRiscoComponent } from './classificacao-risco.component';

describe('ClassificacaoRiscoComponent', () => {
  let component: ClassificacaoRiscoComponent;
  let fixture: ComponentFixture<ClassificacaoRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificacaoRiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificacaoRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
