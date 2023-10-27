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
import { AdminNavComponent } from './admin-nav/admin-nav.component';
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
    EditUserComponent
  ],
  imports: [BrowserModule, NgxStripeModule.forRoot('pk_test_51O5YCYFsXQwPd2tbJm8xT224tG7OoCXWGyigDqVGZ2DeNsiWxhSDfJNiBbfq508cDU15nQOctVTijlbUcJvVqleO00OTWN3YAb'),SlickCarouselModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule,FormsModule,ToastrModule.forRoot({
    positionClass:'custom-toast-position',
  }),BrowserAnimationsModule,], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
