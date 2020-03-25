import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtHomeCareComponent } from './at-home-care.component';

describe('AtHomeCareComponent', () => {
  let component: AtHomeCareComponent;
  let fixture: ComponentFixture<AtHomeCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtHomeCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtHomeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
