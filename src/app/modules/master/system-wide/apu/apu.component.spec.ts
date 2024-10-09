import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuComponent } from './apu.component';

describe('ApuComponent', () => {
  let component: ApuComponent;
  let fixture: ComponentFixture<ApuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
