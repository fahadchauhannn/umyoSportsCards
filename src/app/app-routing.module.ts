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
import { AdminLiveChatComponent } from './admin/admin-live-chat/admin-live-chat.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { UpdateAgentComponent } from './admin/update-agent/update-agent.component';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { EditPackageComponent } from './admin/edit-package/edit-package.component';
import { ViewChatComponent } from './admin/view-chat/view-chat.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
const routes: Routes = [
      { path: '', component: HomeComponent },

      { path: 'admin/dashboard', component: DashboardComponent },
      { path: 'admin/users', component: UsersComponent },
      { path: 'admin/admin-support-agent-list', component: AdminSupportAgentListComponent },
      { path: 'admin/packages', component: PackagesComponent },
      { path: 'admin/admin-amount', component: AdminAmountComponent },
      { path: 'admin/admin-chat-record', component: AdminChatRecordComponent },
      { path: 'admin/profile', component: ProfileComponent },
      { path: 'admin/admin-support-agent-add', component: AddAgentComponent },
      { path: 'admin/admin-live-chat', component: AdminLiveChatComponent },
      { path: 'admin/user/:id', component: EditUserComponent },
      { path: 'update-agent/:id', component: UpdateAgentComponent },
      { path: 'admin/add-package', component: AddPackageComponent },
      { path: 'admin/edit-package/:id', component: EditPackageComponent },
      { path: 'admin/viewChat/:id', component: ViewChatComponent },
  
      
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
