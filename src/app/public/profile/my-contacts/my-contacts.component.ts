import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent {


  myContacts:any=[]
  id = localStorage.getItem('user_id')
  
  user_id  = parseInt(this.id, 10); 
  constructor(private apiService:ApiService,private router: Router){
    this.apiService.getContact(this.user_id).subscribe(
      (response)=>{
        if(response.status='Success'){
          this.myContacts=response.contacts
          
          
        }
        else{
          alert("error getting contacts")
          
        }
      },(error)=>{
        alert('error fetching contacts with error: '+ error)
        
      }
    )

  }

  sendMessage(id:any){
    this.router.navigate(['/messages']);

  }
}
