import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNameListComponent } from './tab-name-list.component';

describe('TabNameListComponent', () => {
  let component: TabNameListComponent;
  let fixture: ComponentFixture<TabNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabNameListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
