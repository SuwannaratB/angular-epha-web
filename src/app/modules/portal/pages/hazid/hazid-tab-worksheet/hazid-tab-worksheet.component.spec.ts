import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazidTabWorksheetComponent } from './hazid-tab-worksheet.component';

describe('HazidTabWorksheetComponent', () => {
  let component: HazidTabWorksheetComponent;
  let fixture: ComponentFixture<HazidTabWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazidTabWorksheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazidTabWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
