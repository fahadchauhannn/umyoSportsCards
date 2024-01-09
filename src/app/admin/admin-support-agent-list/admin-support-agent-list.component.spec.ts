import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupportAgentListComponent } from './admin-support-agent-list.component';

describe('AdminSupportAgentListComponent', () => {
  let component: AdminSupportAgentListComponent;
  let fixture: ComponentFixture<AdminSupportAgentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSupportAgentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSupportAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
