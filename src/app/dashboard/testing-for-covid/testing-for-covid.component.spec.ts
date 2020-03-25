import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingForCovidComponent } from './testing-for-covid.component';

describe('TestingForCovidComponent', () => {
  let component: TestingForCovidComponent;
  let fixture: ComponentFixture<TestingForCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingForCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingForCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
