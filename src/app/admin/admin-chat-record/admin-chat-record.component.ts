import { Component, OnInit } from '@angular/core';
import { ChatRecord } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-chat-record',
  templateUrl: './admin-chat-record.component.html',
  styleUrls: ['./admin-chat-record.component.css']
})
export class AdminChatRecordComponent implements OnInit{
  records: ChatRecord[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN'; // Replace with your actual bearer token
    this.isLoading=true
    this.apiService.getChatRecord(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.records = response.Record; // Assuming the API response has a 'data' property containing the user data
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteRecord(recordId: number) {
    
  }
}