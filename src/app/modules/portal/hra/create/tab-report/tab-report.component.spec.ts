import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReportComponent } from './tab-report.component';

describe('TabReportComponent', () => {
  let component: TabReportComponent;
  let fixture: ComponentFixture<TabReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
