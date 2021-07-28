import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightCardComponent } from './spotlight-card.component';

describe('SpotlightCardComponent', () => {
  let component: SpotlightCardComponent;
  let fixture: ComponentFixture<SpotlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
