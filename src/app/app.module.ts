import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminSupportAgentListComponent } from './admin/admin-support-agent-list/admin-support-agent-list.component';
import { PackagesComponent } from './admin/packages/packages.component';
import { AdminAmountComponent } from './admin/admin-amount/admin-amount.component';
import { AdminChatRecordComponent } from './admin/admin-chat-record/admin-chat-record.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AdminLiveChatComponent } from './admin/admin-live-chat/admin-live-chat.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { UpdateAgentComponent } from './admin/update-agent/update-agent.component';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { EditPackageComponent } from './admin/edit-package/edit-package.component';
import { ViewChatComponent } from './admin/view-chat/view-chat.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { CardsComponent } from './public/cards/cards.component';
import { NavComponent } from './public/nav/nav.component';
import { ActivityComponent } from './public/activity/activity.component';
import { ContactComponent } from './public/contact/contact.component';
import { RequestsComponent } from './public/requests/requests.component';
import { MessagesComponent } from './public/messages/messages.component';
import { LiveChatComponent } from './public/live-chat/live-chat.component';
import { ProfileComponent as publicProfileComponent } from './public/profile/profile.component';
import { ProfileNavComponent } from './public/profile-nav/profile-nav.component';
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
import { UserComponent } from './public/user/user.component';
import { CreateCardComponent } from './public/create-card/create-card.component';
import { CreateCardStepsComponent } from './public/create-card-steps/create-card-steps.component';
import { Template01Component } from './public/create-card-steps/templates/template01/template01.component';
import { NgxEditorModule } from 'ngx-editor';
import { Template02Component } from './public/create-card-steps/templates/template02/template02.component';
import { Template03Component } from './public/create-card-steps/templates/template03/template03.component';
import { Template04Component } from './public/create-card-steps/templates/template04/template04.component';
import { Template05Component } from './public/create-card-steps/templates/template05/template05.component';
import { Template06Component } from './public/create-card-steps/templates/template06/template06.component';
import { Template07Component } from './public/create-card-steps/templates/template07/template07.component';
import { Template08Component } from './public/create-card-steps/templates/template08/template08.component';
import { Template09Component } from './public/create-card-steps/templates/template09/template09.component';
import { Template10Component } from './public/create-card-steps/templates/template10/template10.component';
import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';
import { Template11Component } from './public/create-card-steps/templates/template11/template11.component';
import { Template12Component } from './public/create-card-steps/templates/template12/template12.component';
import { Template13Component } from './public/create-card-steps/templates/template13/template13.component';
import { Template14Component } from './public/create-card-steps/templates/template14/template14.component';
import { Template15Component } from './public/create-card-steps/templates/template15/template15.component';
import { PreviewCardComponent } from './public/cards/preview-card/preview-card.component';
import { EditCardComponent } from './public/edit-card/edit-card.component';
import { ShareCardComponent } from './public/cards/share-card/share-card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TruckersComponent } from './truckers/truckers.component';
import { UmyocardsComponent } from './umyocards/umyocards.component';
import { MissionComponent } from './mission/mission.component';
import { PledgeComponent } from './pledge/pledge.component';
import { AboutComponent } from './about/about.component';
import { PackageComponent } from './package/package.component';
import { CfComponent } from './cf/cf.component';
import { AiComponent } from './ai/ai.component';



@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    AdminSupportAgentListComponent,
    PackagesComponent,
    AdminAmountComponent,
    AdminChatRecordComponent,
    ProfileComponent,
    AdminLiveChatComponent,
    AdminNavComponent,
    AddAgentComponent,
    UpdateAgentComponent,
    AddPackageComponent,
    EditPackageComponent,
    ViewChatComponent,
    EditUserComponent,
    EmailVerificationComponent,
    CardsComponent,
    NavComponent,
    ActivityComponent,
    ContactComponent,
    RequestsComponent,
    MessagesComponent,
    LiveChatComponent,
    publicProfileComponent,
    ProfileNavComponent,
    BasicInformationComponent,
    WorkAndSocialComponent,
    ApplyForReferralComponent,
    BonusAmountComponent,
    ChangePasswordComponent,
    MyContactsComponent,
    TeamComponent,
    ProductsComponent,
    ProComponent,
    NetworkComponent,
    UserComponent,
    CreateCardComponent,
    CreateCardStepsComponent,
    Template01Component,
    Template02Component,
    Template03Component,
    Template04Component,
    Template05Component,
    Template06Component,
    Template07Component,
    Template08Component,
    Template09Component,
    Template10Component,
    Template11Component,
    Template12Component,
    Template13Component,
    Template14Component,
    Template15Component,
    PreviewCardComponent,
    EditCardComponent,
    ShareCardComponent,
    ForgotPasswordComponent,
    TruckersComponent,
    UmyocardsComponent,
    MissionComponent,
    PledgeComponent,
    AboutComponent,
    PackageComponent,
    CfComponent,
    AiComponent,
    
    
    
    
    
  ],
  
  imports: [
   
    NgxSimpleTextEditorModule,
    NgxEditorModule,
    BrowserModule,
    NgxStripeModule.forRoot('pk_test_51O5YCYFsXQwPd2tbJm8xT224tG7OoCXWGyigDqVGZ2DeNsiWxhSDfJNiBbfq508cDU15nQOctVTijlbUcJvVqleO00OTWN3YAb'),
    SlickCarouselModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'custom-toast-position',
    }),
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
