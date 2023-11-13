import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  showModal = false;
  contactForm: FormGroup;
  contactList:any=[]
  formController:any='save'
  updateContactId:any
  isLoading:boolean=false
  myContacts:any=[]
  constructor(private fb: FormBuilder,private apiService:ApiService,private router: Router,) {
this.fetchContacts()
    
  }

  sendMessage(id:any){
    this.router.navigate(['/messages']);

  }

  fetchContacts(){
    this.isLoading=true
    this.apiService.getCustomContact(this.user_id).subscribe(
      (response)=>{
        if(response.status='Success'){
          this.contactList=response.customContacts
          this.isLoading=false
          
        }
        else{
          alert("error getting contacts")
          this.isLoading=false
        }
      },(error)=>{
        alert('error fetching contacts with error: '+ error)
        this.isLoading=false
      }
    )
    this.apiService.getContact(this.user_id).subscribe(
      (response)=>{
        if(response.status='Success'){
          this.myContacts=response.contacts
          this.isLoading=false
          
        }
        else{
          alert("error getting contacts")
          this.isLoading=false
        }
      },(error)=>{
        alert('error fetching contacts with error: '+ error)
        this.isLoading=false
      }
    )
    

  }
  
   id = localStorage.getItem('user_id')
  
 user_id  = parseInt(this.id, 10); 

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      user_id:[this.user_id],
      firstName: [''],
      lastName: [''],
      tags: [''],
      gender: [''],
      company: [''],
      position: [''],
      facebook: [''],
      twitter: [''],
      linkedin: [''],
      
      emails: this.fb.array([]),
      phoneNumbers: this.fb.array([]),
      addresses: this.fb.array([]),
      websites: this.fb.array([]),
    });

    this.websites.push(this.fb.control(''));
    this.addresses.push(this.fb.control(''));
    this.phoneNumbers.push(this.fb.control(''));
    this.emails.push(this.fb.control(''));
  }

  // Add functions for adding/removing email, phone number, address, and website fields


  deleteContact(contact: any) {

    const confirmation = confirm(`Are You sure you want to delete this contact?`);
    if (confirmation) {
      this.isLoading=true
        this.apiService.deleteCustomContact(this.id,contact.id).subscribe(
          (response)=>{
            if(response.status=='Success'){
              alert("contact deleted sucessfully")
              this.isLoading=false
              this.fetchContacts()
            }
            else{
              alert("contact delete unsucessfull")
            }
          },(error)=>{
            alert("contact deleted sucessfully")
          }
        )
        this.isLoading=false
    }
  
  
  }


  addContact(){
    this.contactForm = this.fb.group({
      user_id:[this.user_id],
      firstName: [''],
      lastName: [''],
      tags: [''],
      gender: [''],
      company: [''],
      position: [''],
      facebook: [''],
      twitter: [''],
      linkedin: [''],
      
      emails: this.fb.array([]),
      phoneNumbers: this.fb.array([]),
      addresses: this.fb.array([]),
      websites: this.fb.array([]),
    });

    this.websites.push(this.fb.control(''));
    this.addresses.push(this.fb.control(''));
    this.phoneNumbers.push(this.fb.control(''));
    this.emails.push(this.fb.control(''));


    this.openAddContactModal()
  }

  editContact(contact: any) {
    // Populate the modal with contact data
    this.contactForm.patchValue({
      user_id: contact.user_id,
      firstName: contact.firstname,
      lastName: contact.lastname,
      tags: contact.tags,
      gender: contact.gender,
      company: contact.company,
      position: contact.position,
      facebook: contact.facebook,
      twitter: contact.twitter,
      linkedin: contact.linkedin,
      
    });

    // Pre-populate email, phone, address, and website fields in the modal
    this.populateFormArray('emails', contact.email);
    this.populateFormArray('phoneNumbers', contact.phone);
    this.populateFormArray('addresses', contact.address);
    this.populateFormArray('websites', contact.website);

    // Open the existing modal for editing
    this.updateContactId=contact.id
    this.formController='update'

    this.openAddContactModal();

  }

  // Function to populate a FormArray with values
  populateFormArray(formArrayName: string, values: any[]) {
    const formArray = this.contactForm.get(formArrayName) as FormArray;
    formArray.clear(); // Clear existing values
    values.forEach(value => {
      // Check if the value is an object and extract the property value
      if (typeof value === 'object' && value !== null) {
        // Iterate over the object properties and push their values to the form array
        Object.values(value).forEach(propertyValue => {
          formArray.push(this.fb.control(propertyValue));
        });
      } else {
        // If it's not an object, add it as is (assumes it's a valid string)
        formArray.push(this.fb.control(value));
      }
    });
  }

  // ...






  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control(''));
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  addAddress() {
    this.addresses.push(this.fb.control(''));
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  addWebsite() {
    this.websites.push(this.fb.control(''));
  }

  removeWebsite(index: number) {
    this.websites.removeAt(index);
  }

  saveContact() {
    this.isLoading=true
    const contact = this.contactForm.value;
  
    
    const formattedEmails = contact.emails.map(email => ({ email }));
  
    
    const formattedAddresses = contact.addresses.map(address => ({ address }));
    
    
    const formattedWebsites = contact.websites.map(website => ({ website }));
  
    
    const formattedPhones = contact.phoneNumbers.map(phone => ({ phone }));
  
    
    if(this.formController=='save'){
      const formattedPayload = {
        user_id: contact.user_id,
        firstname: contact.firstName,
        lastname: contact.lastName,
        tags: contact.tags,
        gender: contact.gender,
        company: contact.company,
        position: contact.position,
        facebook: contact.facebook,
        twitter: contact.twitter,
        linkedin: contact.linkedin,
        email: JSON.stringify(formattedEmails),
        phone: JSON.stringify(formattedPhones),
        address: JSON.stringify(formattedAddresses),
        website: JSON.stringify(formattedWebsites),
      };
    
      console.log(formattedPayload);
    
      this.apiService.saveContact(formattedPayload).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
    if(this.formController=='update'){
      const formattedPayload = {
        id:this.updateContactId,
        user_id: contact.user_id,
        firstname: contact.firstName,
        lastname: contact.lastName,
        tags: contact.tags,
        gender: contact.gender,
        company: contact.company,
        position: contact.position,
        facebook: contact.facebook,
        twitter: contact.twitter,
        linkedin: contact.linkedin,
        email: JSON.stringify(formattedEmails),
        phone: JSON.stringify(formattedPhones),
        address: JSON.stringify(formattedAddresses),
        website: JSON.stringify(formattedWebsites),
      };
    
      console.log(formattedPayload);
    
      this.apiService.updateContact(formattedPayload).subscribe(
        (response) => {
          console.log(response);
          alert("contact Updated")
          
        }
      );
      this.formController='save'
    }

    
    this.isLoading=false
    this.fetchContacts()
    this.closeAddContactModal();
  }
  

  openAddContactModal() {
    this.showModal = true;
  }

  closeAddContactModal() {
    this.showModal = false;
  }

  get emails() {
    return this.contactForm.get('emails') as FormArray;
  }

  get phoneNumbers() {
    return this.contactForm.get('phoneNumbers') as FormArray;
  }

  get addresses() {
    return this.contactForm.get('addresses') as FormArray;
  }

  get websites() {
    return this.contactForm.get('websites') as FormArray;
  }
}