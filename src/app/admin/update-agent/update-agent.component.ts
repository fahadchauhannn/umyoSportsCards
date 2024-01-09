import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent implements OnInit {
  name: string = '';
  email: string = '';
  id: any;
  isLoading: boolean = false;
  agentData: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
  
    this.route.queryParams.subscribe((params) => {
      if (params['agentData']) {
        this.agentData = JSON.parse(params['agentData']);
        this.name = this.agentData.name;
        this.email = this.agentData.email;
        this.id = this.agentData.id;
      } else {
        // Handle the case where agent data is not available
        console.error('Agent data not found in route parameters.');
      }
  
      this.isLoading = false;
    });
  }
  

  updateAgent() {
    this.isLoading = true;
    this.apiService.updateAgent(this.name, this.email, this.id).subscribe(
      (response) => {
        console.log('Update successful');
        this.isLoading = false;
        this.router.navigate(['admin/admin-support-agent-list']);
      },
      (error) => {
        console.error('Error updating agent:', error);
        // You can display an error message or handle the error as needed
      }
    );
  }
}
