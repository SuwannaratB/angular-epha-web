import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazidTabSessionComponent } from './hazid-tab-session.component';

describe('HazidTabSessionComponent', () => {
  let component: HazidTabSessionComponent;
  let fixture: ComponentFixture<HazidTabSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazidTabSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazidTabSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
