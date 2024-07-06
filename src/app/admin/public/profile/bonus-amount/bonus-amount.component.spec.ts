import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAmountComponent } from './bonus-amount.component';

describe('BonusAmountComponent', () => {
  let component: BonusAmountComponent;
  let fixture: ComponentFixture<BonusAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
