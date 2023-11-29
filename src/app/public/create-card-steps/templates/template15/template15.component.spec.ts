import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template15Component } from './template15.component';

describe('Template15Component', () => {
  let component: Template15Component;
  let fixture: ComponentFixture<Template15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Template15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
