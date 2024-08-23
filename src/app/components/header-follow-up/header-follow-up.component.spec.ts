import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFollowUpComponent } from './header-follow-up.component';

describe('HeaderFollowUpComponent', () => {
  let component: HeaderFollowUpComponent;
  let fixture: ComponentFixture<HeaderFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderFollowUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
