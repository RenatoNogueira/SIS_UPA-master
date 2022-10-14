import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoFormComponent } from './recepcao-form.component';

describe('RecepcaoFormComponent', () => {
  let component: RecepcaoFormComponent;
  let fixture: ComponentFixture<RecepcaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
