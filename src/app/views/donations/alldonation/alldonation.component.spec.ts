import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldonationComponent } from './alldonation.component';

describe('AlldonationComponent', () => {
  let component: AlldonationComponent;
  let fixture: ComponentFixture<AlldonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
