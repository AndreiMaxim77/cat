import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchReqComponent } from './launch-req.component';

describe('LaunchReqComponent', () => {
  let component: LaunchReqComponent;
  let fixture: ComponentFixture<LaunchReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
