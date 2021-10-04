import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAchievmentComponent } from './edit-achievment.component';

describe('EditAchievmentComponent', () => {
  let component: EditAchievmentComponent;
  let fixture: ComponentFixture<EditAchievmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAchievmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAchievmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
