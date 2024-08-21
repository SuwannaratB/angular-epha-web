import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssessmentTeamComponent } from './modal-assessment-team.component';

describe('ModalAssessmentTeamComponent', () => {
  let component: ModalAssessmentTeamComponent;
  let fixture: ComponentFixture<ModalAssessmentTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAssessmentTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAssessmentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
