import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMemberTeamComponent } from './modal-member-team.component';

describe('ModalMemberTeamComponent', () => {
  let component: ModalMemberTeamComponent;
  let fixture: ComponentFixture<ModalMemberTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMemberTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMemberTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});