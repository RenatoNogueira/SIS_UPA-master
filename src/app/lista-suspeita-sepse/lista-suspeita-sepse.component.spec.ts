import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuspeitaSepseComponent } from './lista-suspeita-sepse.component';

describe('ListaSuspeitaSepseComponent', () => {
  let component: ListaSuspeitaSepseComponent;
  let fixture: ComponentFixture<ListaSuspeitaSepseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSuspeitaSepseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSuspeitaSepseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
