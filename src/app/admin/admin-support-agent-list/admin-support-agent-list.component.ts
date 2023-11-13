import { Component, OnInit } from '@angular/core';
import { Agent } from '../../model.model';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-support-agent-list',
  templateUrl: './admin-support-agent-list.component.html',
  styleUrls: ['./admin-support-agent-list.component.css']
})
export class AdminSupportAgentListComponent implements OnInit{
  agents: Agent[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    const bearerToken = localStorage.getItem("admin_access_token")
    this.isLoading=true
    this.apiService.getSupportAgent(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.agents = response.Agents; 
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  editAgent(agent: any) {
    this.router.navigate(['/update-agent', agent.id], {
      queryParams: { agentData: JSON.stringify(agent) },
    });
  }
  deleteAgent(agentId: number) {
    const bearerToken = localStorage.getItem("admin_access_token")
    this.isLoading=true
    this.apiService.deleteAgent(agentId).subscribe(
      (response)=>{
        console.log(response);
        this.apiService.getSupportAgent(bearerToken).subscribe(
          (response) => {
            this.isLoading=false
            this.agents = response.Agents; 
            
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
        this.isLoading=false
        

      }
    )
  }

  handleClick() {
    
    this.router.navigate(['admin/admin-support-agent-add']);
  }
}

