import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.css']
})
export class ViewChatComponent implements OnInit{
  chatMessages: any[] = [];
  isLoading:boolean=false
  name:string=""
  constructor(private apiService: ApiService,private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.isLoading=true
    this.route.params.subscribe((params) => {
      const idParam = params['id'];
      if (idParam) {
        const packageId = +idParam;

        this.apiService.openChat(packageId).subscribe(
          (response) => {
            this.name = JSON.parse(this.route.snapshot.queryParams['chatName']);
            this.chatMessages=response.messages
            this.isLoading=false
          },
          (error) => {
            console.error('Error fetching chat:', error);
          }
        );
      } else {
        
      }
    });
  }
}


