import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmethodologyComponent } from './projectmethodology.component';

describe('ProjectmethodologyComponent', () => {
  let component: ProjectmethodologyComponent;
  let fixture: ComponentFixture<ProjectmethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmethodologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
