import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceForMedicalStaffComponent } from './guidance-for-medical-staff.component';

describe('GuidanceForMedicalStaffComponent', () => {
  let component: GuidanceForMedicalStaffComponent;
  let fixture: ComponentFixture<GuidanceForMedicalStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidanceForMedicalStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidanceForMedicalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
