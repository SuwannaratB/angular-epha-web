import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitNoComponent } from './unit-no.component';

describe('UnitNoComponent', () => {
  let component: UnitNoComponent;
  let fixture: ComponentFixture<UnitNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
