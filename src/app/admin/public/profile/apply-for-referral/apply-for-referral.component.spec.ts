import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForReferralComponent } from './apply-for-referral.component';

describe('ApplyForReferralComponent', () => {
  let component: ApplyForReferralComponent;
  let fixture: ComponentFixture<ApplyForReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
