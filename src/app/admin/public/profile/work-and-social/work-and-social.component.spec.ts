import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndSocialComponent } from './work-and-social.component';

describe('WorkAndSocialComponent', () => {
  let component: WorkAndSocialComponent;
  let fixture: ComponentFixture<WorkAndSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAndSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAndSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
