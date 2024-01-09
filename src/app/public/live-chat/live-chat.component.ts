import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit, OnDestroy, AfterViewInit {
  chatUsers: any[] = [];
  selectedUserId: string = '';
  chatMessages: any[] = [];
  newMessage: string = '';
  
  refreshInterval: number = 4000; // 6 seconds
  refreshSubscription: Subscription | undefined;
  isLoading:boolean=false
  @ViewChild('ChatContainer', { static: true }) ChatContainer: ElementRef 


  constructor(private apiService: ApiService,private router: Router,) {

    
  }
  ngAfterViewInit() {
    console.log('chatContainer:', this.ChatContainer);
    
      this.scrollToBottom();
    
  }
  user_id:any
  liveChat_id:any
  email:string
  name:string
  ngOnInit() {
    this.isLoading=true
    
    

    const id = localStorage.getItem('user_id')
     this.email = localStorage.getItem('email')
     this.name = localStorage.getItem('firstname')
    this.user_id  = parseInt(id, 10);

this.apiService.startLiveChat(this.email,this.name).subscribe(
  (response)=>{
    if(response.status=="Success"){

this.liveChat_id=response.LiveChat.id
      this.apiService.openChat(response.LiveChat.id).subscribe(
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
    else{
      alert("failed to start live chat")
      this.isLoading=false
    }
  },
  (error)=>{
    alert("failed to send live chat request error: " + error)
    this.isLoading=false
  }
)
   


  }
  scrollToBottom() {
    const scrollContainer = this.ChatContainer.nativeElement;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
    console.log('Scrolled to bottom');
  }
 

  
  startChatMessageRefresh() {
    this.refreshSubscription = interval(this.refreshInterval).subscribe(() => {
      
        this.apiService.openChat(this.liveChat_id).subscribe(
          (response: any) => {
            this.chatMessages = response.messages.map((message: any) => message);
            this.scrollToBottom();
          },
          (error) => {
            console.error('Error refreshing chat messages:', error);
          }
        );
      
    });
  }

  sendMessage(){
    this.isLoading=true
    this.apiService.saveChat(this.liveChat_id,this.newMessage,"sent","").subscribe(
      (response:any)=>{
        if(response.status=="Success"){
          console.log("message send");
          this.isLoading=false
          this.newMessage=""
          this.scrollToBottom();
        }
        else{
          alert("failed to send message")
          this.isLoading=false
        }
        
      },
    (error)=>{
      alert("failed to send message with error :"+ error)
    }

    )
    
    
    
    
  }
  emailChat(){
    this.isLoading=true
    this.apiService.emailChat(this.liveChat_id).subscribe(
      (response:any)=>{
        if(response.status=="Success"){
          alert("Chat Sent to Email")
          this.isLoading=false
          
          this.scrollToBottom();
        }
        else{
          alert("failed to send chat")
          this.isLoading=false
        }
        
      },
    (error)=>{
      alert("failed to send message with error :"+ error)
      this.isLoading=false
    }

    )
    
    
    
    
  }
  closeChat(){
    this.isLoading=true
    this.apiService.closeChat(this.liveChat_id).subscribe(
      (response:any)=>{
        if(response.status=="Success"){
          
          this.router.navigate(['/cards']);
        }
        else{
          alert("failed to close chat")
          this.isLoading=false
        }
        
      },
    (error)=>{
      alert("failed to close chat error :"+ error)
      this.isLoading=false
    }

    )
    
    
    
    
  }

  

  ngOnDestroy() {
    
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
}
