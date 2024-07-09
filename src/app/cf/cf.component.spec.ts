import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfComponent } from './cf.component';

describe('CfComponent', () => {
  let component: CfComponent;
  let fixture: ComponentFixture<CfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
