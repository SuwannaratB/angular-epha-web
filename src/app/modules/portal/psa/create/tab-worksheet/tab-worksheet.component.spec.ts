import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWorksheetComponent } from './tab-worksheet.component';

describe('TabWorksheetComponent', () => {
  let component: TabWorksheetComponent;
  let fixture: ComponentFixture<TabWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabWorksheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
