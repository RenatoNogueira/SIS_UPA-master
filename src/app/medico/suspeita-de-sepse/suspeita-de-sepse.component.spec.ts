import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspeitaDeSepseComponent } from './suspeita-de-sepse.component';

describe('SuspeitaDeSepseComponent', () => {
  let component: SuspeitaDeSepseComponent;
  let fixture: ComponentFixture<SuspeitaDeSepseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspeitaDeSepseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspeitaDeSepseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
