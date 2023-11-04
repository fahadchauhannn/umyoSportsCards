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
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { CardsComponent } from './public/cards/cards.component';
import { ActivityComponent } from './public/activity/activity.component';
import { ContactComponent } from './public/contact/contact.component';
import { RequestsComponent } from './public/requests/requests.component';
import { MessagesComponent } from './public/messages/messages.component';
import { ProfileComponent as publicProfileComponent } from './public/profile/profile.component';
import { LiveChatComponent } from './public/live-chat/live-chat.component';
import { BasicInformationComponent } from './public/profile/basic-information/basic-information.component';
import { WorkAndSocialComponent } from './public/profile/work-and-social/work-and-social.component';
import { ApplyForReferralComponent } from './public/profile/apply-for-referral/apply-for-referral.component';
import { BonusAmountComponent } from './public/profile/bonus-amount/bonus-amount.component';
import { ChangePasswordComponent } from './public/profile/change-password/change-password.component';
import { MyContactsComponent } from './public/profile/my-contacts/my-contacts.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { ProComponent } from './pro/pro.component';
import { NetworkComponent } from './network/network.component';
const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'pro', component: ProComponent },
      { path: 'network', component: NetworkComponent },

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
      { path: 'email-verification', component: EmailVerificationComponent },
      
      { path: 'cards', component: CardsComponent },
      { path: 'activities', component: ActivityComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'live-chat', component: LiveChatComponent },
      // { path: 'profile', component: publicProfileComponent },

      {
        path: 'profile',
        component: publicProfileComponent,
        children: [
          { path: '', redirectTo: 'my-contacts', pathMatch: 'full' },
          { path: 'my-contacts', component: MyContactsComponent },
          { path: 'basic-information', component: BasicInformationComponent },
          { path: 'work-and-social', component: WorkAndSocialComponent },
          { path: 'apply-for-referral', component: ApplyForReferralComponent },
          { path: 'bonus-amount', component: BonusAmountComponent },
          { path: 'change-password', component: ChangePasswordComponent },
          // Add routes for other profile sections here
        ],
      },
      
      
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
