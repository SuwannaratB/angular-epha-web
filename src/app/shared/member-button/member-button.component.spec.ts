import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberButtonComponent } from './member-button.component';

describe('MemberButtonComponent', () => {
  let component: MemberButtonComponent;
  let fixture: ComponentFixture<MemberButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
