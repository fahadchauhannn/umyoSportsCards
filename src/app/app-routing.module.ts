import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {  UsersComponent} from './admin/users/users.component';
import { AdminSupportAgentListComponent } from './admin/admin-support-agent-list/admin-support-agent-list.component';
import { PackagesComponent } from './admin/packages/packages.component';
import { AdminAmountComponent} from './admin/admin-amount/admin-amount.component';
import { AdminChatRecordComponent } from './admin/admin-chat-record/admin-chat-record.component';
import { ProfileComponent } from './admin/profile/profile.component';
import {AdminComponent} from './admin/admin.component'
import { AdminLiveChatComponent } from './admin/admin-live-chat/admin-live-chat.component';
import { UserEditComponent } from './user-edit/user-edit.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  
    
      { path: 'admin/dashboard', component: DashboardComponent },
      { path: 'admin/users', component: UsersComponent },
      { path: 'admin/admin-support-agent-list', component: AdminSupportAgentListComponent },
      { path: 'admin/packages', component: PackagesComponent },
      { path: 'admin/admin-amount', component: AdminAmountComponent },
      { path: 'admin/admin-chat-record', component: AdminChatRecordComponent },
      { path: 'admin/profile', component: ProfileComponent },
      { path: 'admin/admin-live-chat', component: AdminLiveChatComponent },
      { path: 'admin/user/:id', component: UserEditComponent },
  
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
