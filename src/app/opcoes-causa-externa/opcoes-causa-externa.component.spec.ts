import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesCausaExternaComponent } from './opcoes-causa-externa.component';

describe('OpcoesCausaExternaComponent', () => {
  let component: OpcoesCausaExternaComponent;
  let fixture: ComponentFixture<OpcoesCausaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesCausaExternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesCausaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
