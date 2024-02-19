import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmyocardsComponent } from './umyocards.component';

describe('UmyocardsComponent', () => {
  let component: UmyocardsComponent;
  let fixture: ComponentFixture<UmyocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmyocardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmyocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
