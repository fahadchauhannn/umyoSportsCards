import { ComponentFixture, TestBed } from '@angular/core/testing';

import { medicalComponent } from './medical.component';

describe('medicalComponent', () => {
  let component: medicalComponent;
  let fixture: ComponentFixture<medicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ medicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(medicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
