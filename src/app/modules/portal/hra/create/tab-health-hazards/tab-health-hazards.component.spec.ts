import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHealthHazardsComponent } from './tab-health-hazards.component';

describe('TabHealthHazardsComponent', () => {
  let component: TabHealthHazardsComponent;
  let fixture: ComponentFixture<TabHealthHazardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHealthHazardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabHealthHazardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
