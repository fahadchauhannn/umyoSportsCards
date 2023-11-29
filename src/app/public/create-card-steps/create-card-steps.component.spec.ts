import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardStepsComponent } from './create-card-steps.component';

describe('CreateCardStepsComponent', () => {
  let component: CreateCardStepsComponent;
  let fixture: ComponentFixture<CreateCardStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
