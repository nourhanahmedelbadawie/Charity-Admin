import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDonationComponent } from './single-donation.component';

describe('SingleDonationComponent', () => {
  let component: SingleDonationComponent;
  let fixture: ComponentFixture<SingleDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
