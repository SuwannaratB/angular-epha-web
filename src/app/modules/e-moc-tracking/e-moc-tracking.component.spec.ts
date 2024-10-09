import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMocTrackingComponent } from './e-moc-tracking.component';

describe('EMocTrackingComponent', () => {
  let component: EMocTrackingComponent;
  let fixture: ComponentFixture<EMocTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EMocTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMocTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
