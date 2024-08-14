import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopaComponent } from './lopa.component';

describe('LopaComponent', () => {
  let component: LopaComponent;
  let fixture: ComponentFixture<LopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LopaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
