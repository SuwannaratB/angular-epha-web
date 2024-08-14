import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazidComponent } from './hazid.component';

describe('HazidComponent', () => {
  let component: HazidComponent;
  let fixture: ComponentFixture<HazidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
