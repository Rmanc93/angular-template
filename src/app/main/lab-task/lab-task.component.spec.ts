import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTaskComponent } from './lab-task.component';

describe('LabTaskComponent', () => {
  let component: LabTaskComponent;
  let fixture: ComponentFixture<LabTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
