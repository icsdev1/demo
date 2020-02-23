import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfmComponent } from './ifm.component';

describe('IfmComponent', () => {
  let component: IfmComponent;
  let fixture: ComponentFixture<IfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
