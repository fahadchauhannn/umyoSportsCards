import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-live-chat',
  templateUrl: './admin-live-chat.component.html',
  styleUrls: ['./admin-live-chat.component.css']
})

  export class AdminLiveChatComponent implements OnInit, OnDestroy, AfterViewInit {
  chatUsers: any[] = [];
  selectedUserId: string = '';
  chatMessages: any[] = [];
  newMessage: string = '';
  chatDisplay: boolean = false;
  refreshInterval: number = 4000; // 6 seconds
  refreshSubscription: Subscription | undefined;
  isLoading:boolean=false
  @ViewChild('chat-messages', { static: true }) scrollContainer: ElementRef | undefined;


  constructor(private apiService: ApiService) {}
  ngAfterViewInit() {
    
    if (this.scrollContainer) {
      this.scrollToBottom();
    }
  }
  ngOnInit() {
    this.isLoading=true
    
    this.chatDisplay = false;
    this.apiService.getChatUsers().subscribe(
      (response: any) => {
        
        this.chatUsers = response.messages.map((user: any) => user);
        this.isLoading=false
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  scrollToBottom() {
    if (this.scrollContainer) {
      const scrollContainer = this.scrollContainer.nativeElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }}
  openChat(userId: string) {
    this.isLoading=true
    this.chatDisplay = true;
    this.selectedUserId = userId;

    
    this.apiService.openChat(userId).subscribe(
      (response: any) => {
        
        this.chatMessages = response.messages.map((message: any) => message);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
    this.isLoading=false
    
    this.startChatMessageRefresh();
  }

  
  startChatMessageRefresh() {
    this.refreshSubscription = interval(this.refreshInterval).subscribe(() => {
      if (this.selectedUserId) {
        this.apiService.openChat(this.selectedUserId).subscribe(
          (response: any) => {
            this.chatMessages = response.messages.map((message: any) => message);
          },
          (error) => {
            console.error('Error refreshing chat messages:', error);
          }
        );
      }
    });
  }

  sendMessage(){
    const id = localStorage.getItem('admin_id')
    this.isLoading=true
    this.apiService.saveChat(this.selectedUserId,this.newMessage,"recieved",id).subscribe(
      (response:any)=>{
        console.log("message send");
        this.isLoading=false
        this.newMessage=""
        this.scrollToBottom();
      }
    )
    
    
    
    
  }

  ngOnDestroy() {
    
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
}
