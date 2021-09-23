import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAchievmentComponent } from './single-achievment.component';

describe('SingleAchievmentComponent', () => {
  let component: SingleAchievmentComponent;
  let fixture: ComponentFixture<SingleAchievmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAchievmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAchievmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
