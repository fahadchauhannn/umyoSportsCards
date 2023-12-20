import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy, AfterViewInit {
  chatUsers: any[] = [];
  selectedUserId: string = '';
  chatMessages: any[] = [];
  newMessage: string = '';
  chatDisplay: boolean = false;
  refreshInterval: number = 4000; // 6 seconds
  refreshSubscription: Subscription | undefined;
  isLoading:boolean=false
  id = localStorage.getItem('user_id')
  user_id  = parseInt(this.id, 10); 
  loadMessage:boolean=false
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
    this.apiService.getContact(this.user_id).subscribe(
      (response: any) => {
        
        this.chatUsers = response.contacts
        this.isLoading=false

      
      
      
      
      
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    )
  }


  scrollToBottom() {

    if (this.scrollContainer) {
      const scrollContainer = this.scrollContainer.nativeElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }

  }


  openChat(userId: string) {
    this.isLoading=true
    this.chatDisplay = true;
    this.selectedUserId = userId;

    this.loadMessage=true
    this.apiService.getMessages(this.id,userId).subscribe(
      (response: any) => {
        
        this.chatMessages = response.chat
        this.loadMessage=false
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
        this.apiService.getMessages(this.id,this.selectedUserId).subscribe(
          (response: any) => {
            this.chatMessages = response.Chat
            console.log(this.chatMessages);
          },
          (error) => {
            console.error('Error refreshing chat messages:', error);
          }
        );
      }
    })
    
  }

  sendMessage(){
    this.loadMessage=true
    // this.isLoading=true
    this.apiService.sendMessage(this.id,this.selectedUserId,this.newMessage).subscribe(
      (response:any)=>{
        console.log("message send");
        // this.isLoading=false
        this.loadMessage=false
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
