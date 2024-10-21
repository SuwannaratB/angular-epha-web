import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNodeComponent } from './tab-node.component';

describe('TabNodeComponent', () => {
  let component: TabNodeComponent;
  let fixture: ComponentFixture<TabNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
