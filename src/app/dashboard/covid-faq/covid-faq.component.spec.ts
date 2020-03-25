import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidFaqComponent } from './covid-faq.component';

describe('CovidFaqComponent', () => {
  let component: CovidFaqComponent;
  let fixture: ComponentFixture<CovidFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
