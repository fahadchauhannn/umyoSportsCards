// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '././auth.guard';
import { AdminAuthGuard } from '././admin-auth.guard';

// Import your components here
import { CardsComponent } from './public/cards/cards.component';
import { ActivityComponent } from './public/activity/activity.component';
import { ContactComponent } from './public/contact/contact.component';
import { RequestsComponent } from './public/requests/requests.component';
import { MessagesComponent } from './public/messages/messages.component';
import { LiveChatComponent } from './public/live-chat/live-chat.component';
import { UserComponent } from './public/user/user.component';
import { ProfileComponent as publicProfileComponent } from './public/profile/profile.component';
import { MyContactsComponent } from './public/profile/my-contacts/my-contacts.component';
import { BasicInformationComponent } from './public/profile/basic-information/basic-information.component';
import { WorkAndSocialComponent } from './public/profile/work-and-social/work-and-social.component';
import { ApplyForReferralComponent } from './public/profile/apply-for-referral/apply-for-referral.component';
import { BonusAmountComponent } from './public/profile/bonus-amount/bonus-amount.component';
import { ChangePasswordComponent } from './public/profile/change-password/change-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminSupportAgentListComponent } from './admin/admin-support-agent-list/admin-support-agent-list.component';
import { PackagesComponent } from './admin/packages/packages.component';
import { AdminAmountComponent } from './admin/admin-amount/admin-amount.component';
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
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { ProComponent } from './pro/pro.component';
import { NetworkComponent } from './network/network.component';
import { AdminComponent } from './admin/admin.component';
import { CreateCardComponent } from './public/create-card/create-card.component';
import { CreateCardStepsComponent } from './public/create-card-steps/create-card-steps.component';
import { PreviewCardComponent } from './public/cards/preview-card/preview-card.component';
import { EditCardComponent } from './public/edit-card/edit-card.component';
import { ShareCardComponent } from './public/cards/share-card/share-card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TruckersComponent } from './truckers/truckers.component';
import { CfComponent } from './cf/cf.component';
import { AiComponent } from './ai/ai.component';
import { PackageComponent } from './package/package.component';
import { NbaComponent } from './nba/nba.component';



const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch: 'full'},
  { path: 'team', component: TeamComponent },
  // { path: 'truckers', component: TruckersComponent ,pathMatch: 'full' },
  // { path: 'products', component: ProductsComponent },
  // { path: 'pro', component: ProComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'cf', component: CfComponent },
  { path: 'ai', component: AiComponent },
  { path: 'package', component: PackageComponent },

  // Protected routes for authenticated users
  { path: 'cards', component: CardsComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'requests', component: RequestsComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'live-chat', component: LiveChatComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'create-card', component: CreateCardComponent, canActivate: [AuthGuard] },
  { path: 'create-card-steps/:id', component: CreateCardStepsComponent, canActivate: [AuthGuard] },
  { path: 'cards/preview-card/:id', component: PreviewCardComponent, canActivate: [AuthGuard] },
  { path: 'cards/share-card/:id', component: ShareCardComponent },
  { path: 'edit-card/:id', component: EditCardComponent, canActivate: [AuthGuard] },
  {
    path: 'profile',
    component: publicProfileComponent,
    canActivate: [AuthGuard],
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

  // Protected routes for admin
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard] },
  
  { path: 'admin/users', component: UsersComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/admin-support-agent-list', component: AdminSupportAgentListComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/packages', component: PackagesComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/admin-amount', component: AdminAmountComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/admin-chat-record', component: AdminChatRecordComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/profile', component: ProfileComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/admin-support-agent-add', component: AddAgentComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/admin-live-chat', component: AdminLiveChatComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/user/:id', component: EditUserComponent, canActivate: [AdminAuthGuard] },
  { path: 'update-agent/:id', component: UpdateAgentComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/add-package', component: AddPackageComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/edit-package/:id', component: EditPackageComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/viewChat/:id', component: ViewChatComponent, canActivate: [AdminAuthGuard] },
  { path: 'email-verification', component: EmailVerificationComponent },

  // Other public routes without guards
  // ...

  // Catch-all route for unknown paths
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
