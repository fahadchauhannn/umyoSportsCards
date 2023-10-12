import { Component } from '@angular/core';
import {ApiService} from '../../api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  isLoading:boolean=false;
  constructor(private apiService:ApiService,private router: Router){}


  addAgent() {
    this.isLoading=true
    this.apiService.addAgent(this.name, this.email, this.password).subscribe(
      (response) => {
        console.log('Successful');
        this.isLoading=false
        this.router.navigate(['admin/admin-support-agent-list']);
        
      }
    );
  }

}
