import { Component, OnInit } from '@angular/core';
import { Agent } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-support-agent-list',
  templateUrl: './admin-support-agent-list.component.html',
  styleUrls: ['./admin-support-agent-list.component.css']
})
export class AdminSupportAgentListComponent implements OnInit{
  agents: Agent[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN'; // Replace with your actual bearer token
    this.isLoading=true
    this.apiService.getSupportAgent(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.agents = response.Agents; // Assuming the API response has a 'data' property containing the user data
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteAgent(agentId: number) {
    
  }
}

