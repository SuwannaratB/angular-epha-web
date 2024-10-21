import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRamComponent } from './tab-ram.component';

describe('TabRamComponent', () => {
  let component: TabRamComponent;
  let fixture: ComponentFixture<TabRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabRamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
