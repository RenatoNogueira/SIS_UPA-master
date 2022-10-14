import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspeitaDeSindromeGripalComponent } from './suspeita-de-sindrome-gripal.component';

describe('SuspeitaDeSindromeGripalComponent', () => {
  let component: SuspeitaDeSindromeGripalComponent;
  let fixture: ComponentFixture<SuspeitaDeSindromeGripalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspeitaDeSindromeGripalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspeitaDeSindromeGripalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
