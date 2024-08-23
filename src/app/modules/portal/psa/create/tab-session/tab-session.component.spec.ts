import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSessionComponent } from './tab-session.component';

describe('TabSessionComponent', () => {
  let component: TabSessionComponent;
  let fixture: ComponentFixture<TabSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
