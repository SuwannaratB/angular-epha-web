import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazidTabGeneralComponent } from './hazid-tab-general.component';

describe('HazidTabGeneralComponent', () => {
  let component: HazidTabGeneralComponent;
  let fixture: ComponentFixture<HazidTabGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazidTabGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazidTabGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
