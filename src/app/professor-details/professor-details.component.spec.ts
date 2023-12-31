import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDetailsComponent } from './professor-details.component';

describe('ProfessorDetailsComponent', () => {
  let component: ProfessorDetailsComponent;
  let fixture: ComponentFixture<ProfessorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorDetailsComponent]
    });
    fixture = TestBed.createComponent(ProfessorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
