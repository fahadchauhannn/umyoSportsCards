import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
declare var $: any;

import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-card-steps',
  templateUrl: './create-card-steps.component.html',
  styleUrls: ['./create-card-steps.component.css'],
  
})
export class CreateCardStepsComponent implements  OnInit{
  displayStep(stepNumber: number) {
    console.log('display stepp');
    if (stepNumber >= 1 && stepNumber <= 3) {
      $(`.step-${this.currentStep}`).hide()

        


      $(`.step-${stepNumber}`).show() 



      this.currentStep = stepNumber 
    

      this.updateProgressBar()


  
    }
  }
  Form: FormGroup;
  colorOptions: string[] = ['red', 'green', 'yellow', 'olive', 'orange', 'teal', 'blue', 'violet', 'purple', 'pink'];
  selectedColor='red'
  
  referalCode:any
  
  templateId:any
  
  ConvertedPhoto:any
 ConvertedLogo:any
 ConvertedProductImage:any
 
id=localStorage.getItem('user_id')
user_id  = parseInt(this.id, 10);
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
  


  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef, private apiService:ApiService,private route:ActivatedRoute,private router: Router,) {
    this.Form = this.fb.group({
      selectedColor:['red'],
      FirstName: ['John'],
      LastName: ['Doe'],
      CompanyName: ['UMYO Network'],

      Gpa: [''],
      Age: [''],
      Height: [''],
      Weight: [''],
      Grade: [''],
      School: [''],

      JobTitle: ['Affiliate'],
      ccontent: ['Thanks for checking out my virtual business card! I’m excited to introduce you to umyocards because I know you"ll enjoy it as much as I have. umyocards helps me keep track of my prospects, my team, and my time so I can get more accomplished every day. Feel freeto contact me with any questions.'],
      Email: ['team@goumyocards.com'],
      Address: ['umyocards team'],
      PhoneNumber: ['99122301'],
      PhoneNumber2: [''],
      PhoneAllow: [true],
      ForwardCard: [true],
      SaveCard: [true],
      InviteCode: [true],
      Photo: ['assets/images/john-doe-avatar.jpg'],
      Logo: ['assets/images/unmasking-yourself.jpg'],
      ProductImages: ['assets/images/app-devices.jpg'],
      YoutubeTitle:[''],
      YoutubeLink:['https://www.youtube.com/embed/soXhe4aEsTU'],
      VimeoTitle:[''],
      VimeoLink:[''],
      UmyotubeTitle:[''],
      UmyotubeLink:[''],
      LinkButtonTitle:[''],
      LinkButtonLink:[''],
      FacebookLink:[''],
      
      Facebook:['https://www.facebook.com/'],
      Youtube:['https://www.youtube.com/'],
      Linkedin:['https://www.linkedin.com/'],
      Twitter:['https://www.twitter.com/'],
      Snapchat:[''],
      Instagram:['https://www.instagram.com/'],
      Voxer:[''],
      Line:[''],
      Pinterest:['https://www.pinterest.com/'],
      Whatsapp:[''],
      Skype:[''],
      CardTitle:['Title'],



    

    });
    
  }

  


  onPhotoChange(event: any): void {
    const file = event?.target?.files[0];

    if (file) {
      
      this.Form.patchValue({
        Photo: file,
      });
      this.convertPhotoFileToDataURL(file).then((dataUrl) => {
        this.ConvertedPhoto = dataUrl;
        
      }),
      
      this.cdr.detectChanges();
    }
  }
  

  onLogoChange(event: any): void {
    const file = event?.target?.files[0];

    if (file) {
      this.Form.patchValue({
        Logo: file,
      });
      this.convertLogoFileToDataURL(file).then((dataUrl) => {
        this.ConvertedLogo = dataUrl;
      }),
      
      this.cdr.detectChanges();
    }
  }


  onProductImagesChange(event: any): void {
    const file = event?.target?.files[0];

    if (file) {
      this.Form.patchValue({
        ProductImages: file,
      });

      
      this.cdr.detectChanges();
    }
  }
  
  ngOnInit(): void {



    this.currentStep=1
   






    this.route.params.subscribe((params) => {
      this.templateId = params['id'];
      console.log(this.templateId);
  })

    this.apiService.getUserById(this.user_id).subscribe(
      (response)=>{
        if(response.status='Success'){
          this.referalCode=response.Users.refer_code
        }else{console.log('error fetching user data on create card steps');}
      },(error)=>{
        console.log('error fetching request to get user data on create card steps')
      }
    )

    
    this.displayStep(2);
    $('#create-card-section').find('.step').slice(2).hide();

    const updateProgressBar = () => {
      const progressPercentage = ((this.currentStep - 2) / 4) * 100;
      $('.progress-bar').css('width', progressPercentage + '%');
    };

    // Display step 2 on page load
    

    $('.next-step').click(() => {


      
      if (this.currentStep < 6) {
        $(`.step-${this.currentStep}`).addClass('animate__animated animate__fadeOutLeft');
        this.currentStep++;
        setTimeout(() => {
          $('.step').removeClass('animate__animated animate__fadeOutLeft').hide();
          $(`.step-${this.currentStep}`).show().addClass('animate__animated animate__fadeInRight');
          updateProgressBar();
        }, 500);
      }
    });

    $('.prev-step').click(() => {
      if (this.currentStep > 1) {
        $(`.step-${this.currentStep}`).addClass('animate__animated animate__fadeOutRight');
        this.currentStep--;
        setTimeout(() => {
          $('.step').removeClass('animate__animated animate__fadeOutRight').hide();
          $(`.step-${this.currentStep}`).show().addClass('animate__animated animate__fadeInLeft');
          updateProgressBar();
        }, 500);
      }
    });

    // Initial update of the progress bar
    updateProgressBar();
 const uploadBoxes = document.querySelectorAll('.upload_box');
    uploadBoxes.forEach((box) => {
      box.addEventListener('click', () => {
        const targetId = box.getAttribute('data-target');
        const inputElement = document.getElementById(targetId);

        if (inputElement) {
          inputElement.click();
        }
      });
    });
  
   
    
  }
  currentStep:any

check(){
  console.log(this.Form.value.Photo);
  
}


 
  

  updateProgressBar() {
    const progressPercentage = ((this.currentStep - 2) / 4) * 100;
    $('.progress-bar').css('width', progressPercentage + '%');
  }
  
 

  convertLogoFileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          resolve(event.target.result);
        } else {
          reject(new Error('Failed to convert file to data URL.'));
        }
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }
  convertPhotoFileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          resolve(event.target.result);
        } else {
          reject(new Error('Failed to convert file to data URL.'));
        }
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  
   saveCard(){
    const SocialFormData={
      facebook:this.Form.value.Facebook, 
      twitter:this.Form.value.Twitter, 
      youtube:this.Form.value.Youtube, 
      instagram:this.Form.value.Instagram, 
      linkedin:this.Form.value.Linkedin, 
      pinterest:this.Form.value.pinterest, 
      skypeID:this.Form.value.pinterest, 
      whatsappID:this.Form.value.pinterest, 
      snapchat:this.Form.value.pinterest, 
      lineID:this.Form.value.pinterest, 
      voxerID:this.Form.value.pinterest, 
      youtubeVideos:[{youtubeTitle:this.Form.value.YoutubeTitle,youtubeLink:this.Form.value.YoutubeLink}], 
      vimeoVideos:[{vimeoTitle:this.Form.value.VimeoTitle,vimeoLink:this.Form.value.VimeoLink}], 
      umyotubeVideos:[{umyoutubeTitle:this.Form.value.UmyotubeTitle,umyotubeLink:this.Form.value.UmyotubeLink}], 
      linkButtons:[{linkButtonTitle:this.Form.value.LinkButtonTitle,websiteLink:this.Form.value.LinkButtonLink}], 
    }
const infoFormData={
  templateId:this.templateId,
    cardTitle:this.Form.value.CardTitle,
    firstName:this.Form.value.FirstName,
    lastName:this.Form.value.LastName,
    email:this.Form.value.email,
    phoneNumber:this.Form.value.PhoneNumber,
    alternativePhoneNo:this.Form.value.PhoneNumber2,
    companyName:this.Form.value.CompanyName,
    jobTitle:this.Form.value.JobTitle,
    address:this.Form.value.Address,
    aboutText:this.Form.value.ccontent,
    phoneTextAllow:this.Form.value.PhoneAllow,
    showSaveButton:this.Form.value.SaveCard,
    showForwardButton:this.Form.value.ForwardCard,
    showInviteCode:this.Form.value.InviteCode,

    gpa:this.Form.value.Gpa,
    age:this.Form.value.Age,
    height:this.Form.value.Height,
    weight:this.Form.value.Weight,
    grade:this.Form.value.Grade,
    school:this.Form.value.School,



    inviteCode:this.referalCode,
    
}
    const formData={
      buttonColor:this.Form.value.selectedColor,
      cardTitle:this.Form.value.CardTitle,
      change_logo:this.ConvertedLogo,
      change_photo:this.ConvertedPhoto,
      colorTheme:this.Form.value.selectedColor,
      user_id:this.id,
      infoFormData:JSON.stringify(infoFormData),
      socialFormData: JSON.stringify(SocialFormData),


    }
    
    
  console.log(formData);

  this.apiService.saveCard(formData).subscribe(
    (response)=>{
      if(response.status!='Failed'){
        alert("Card Saved! ")
        this.router.navigate(['/cards']);
      }
      else{
        alert("Failed! "+ response.message)

      }

    },(error)=>{
alert("Failed! " + error)
    }
  )

  

  
} 

}
