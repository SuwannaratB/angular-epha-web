import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabManageRecommendationsComponent } from './tab-manage-recommendations.component';

describe('TabManageRecommendationsComponent', () => {
  let component: TabManageRecommendationsComponent;
  let fixture: ComponentFixture<TabManageRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabManageRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabManageRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
