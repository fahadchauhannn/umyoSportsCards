import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAmountComponent } from './admin-amount.component';

describe('AdminAmountComponent', () => {
  let component: AdminAmountComponent;
  let fixture: ComponentFixture<AdminAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
