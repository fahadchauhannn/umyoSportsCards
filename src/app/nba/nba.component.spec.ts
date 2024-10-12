import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lawyerComponent } from './lawyer.component';

describe('lawyerComponent', () => {
  let component: lawyerComponent;
  let fixture: ComponentFixture<lawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ lawyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(lawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
