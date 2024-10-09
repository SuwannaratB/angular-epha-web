import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationSettingComponent } from './authorization-setting.component';

describe('AuthorizationSettingComponent', () => {
  let component: AuthorizationSettingComponent;
  let fixture: ComponentFixture<AuthorizationSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorizationSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
