import { Component, OnInit } from '@angular/core';
import { ChatRecord } from '../../model.model';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-chat-record',
  templateUrl: './admin-chat-record.component.html',
  styleUrls: ['./admin-chat-record.component.css']
})
export class AdminChatRecordComponent implements OnInit{
  records: ChatRecord[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService,private router: Router) {}


  ngOnInit(): void {
    const bearerToken = localStorage.getItem("admin_access_token")
    this.isLoading=true
    this.apiService.getChatRecord(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.records = response.Record;
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteRecord(recordId: number) {
    
  }
  viewChat(chat: any) {
    this.router.navigate(['//admin/viewChat/', chat.id], {
      queryParams: { chatName: JSON.stringify(chat.name) },
    });
  }
}