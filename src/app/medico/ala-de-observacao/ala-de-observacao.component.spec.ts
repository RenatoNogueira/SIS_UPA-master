import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaDeObservacaoComponent } from './ala-de-observacao.component';

describe('AlaDeObservacaoComponent', () => {
  let component: AlaDeObservacaoComponent;
  let fixture: ComponentFixture<AlaDeObservacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlaDeObservacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlaDeObservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
