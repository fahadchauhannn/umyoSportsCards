import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatRecordComponent } from './admin-chat-record.component';

describe('AdminChatRecordComponent', () => {
  let component: AdminChatRecordComponent;
  let fixture: ComponentFixture<AdminChatRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChatRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChatRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
