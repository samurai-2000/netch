import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBriefComponent } from './tracking-brief.component';

describe('TrackingBriefComponent', () => {
  let component: TrackingBriefComponent;
  let fixture: ComponentFixture<TrackingBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
