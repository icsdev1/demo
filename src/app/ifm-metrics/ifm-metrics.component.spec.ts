import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfmMetricsComponent } from './ifm-metrics.component';

describe('IfmMetricsComponent', () => {
  let component: IfmMetricsComponent;
  let fixture: ComponentFixture<IfmMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfmMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfmMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
