import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWorkerGroupsComponent } from './tab-worker-groups.component';

describe('TabWorkerGroupsComponent', () => {
  let component: TabWorkerGroupsComponent;
  let fixture: ComponentFixture<TabWorkerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabWorkerGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWorkerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});