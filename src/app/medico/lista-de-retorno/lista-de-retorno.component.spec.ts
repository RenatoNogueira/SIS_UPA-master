import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeRetornoComponent } from './lista-de-retorno.component';

describe('ListaDeRetornoComponent', () => {
  let component: ListaDeRetornoComponent;
  let fixture: ComponentFixture<ListaDeRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeRetornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
