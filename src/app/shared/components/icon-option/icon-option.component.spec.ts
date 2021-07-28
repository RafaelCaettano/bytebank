import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOptionComponent } from './icon-option.component';

describe('IconOptionComponent', () => {
  let component: IconOptionComponent;
  let fixture: ComponentFixture<IconOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
