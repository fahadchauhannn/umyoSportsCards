import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckersComponent } from './truckers.component';

describe('TruckersComponent', () => {
  let component: TruckersComponent;
  let fixture: ComponentFixture<TruckersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
