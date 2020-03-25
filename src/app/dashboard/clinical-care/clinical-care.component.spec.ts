import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCareComponent } from './clinical-care.component';

describe('ClinicalCareComponent', () => {
  let component: ClinicalCareComponent;
  let fixture: ComponentFixture<ClinicalCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
