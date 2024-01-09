import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

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



      YoutubeVideos: this.fb.array([this.createYoutubeVideoGroup()]),

      UmyotubeVideos:this.fb.array([this.createUmyotubeVideoGroup()]),
      VimeoVideos:this.fb.array([this.createVimeoVideoGroup()]),
      LinkButton:this.fb.array([this.createLinkButtonGroup()]),

      
      
      
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

  createYoutubeVideoGroup() {
    return this.fb.group({
      youtubeTitle: [''],
      youtubeLink: [''],
    });
  }
  createUmyotubeVideoGroup() {
    return this.fb.group({
      umyotubeTitle: [''],
      umyotubeLink: [''],
    });
  }
  createVimeoVideoGroup() {
    return this.fb.group({
      vimeoVideoTitle: [''],
      vimeoVideoLink: [''],
    });
  }
  createLinkButtonGroup() {
    return this.fb.group({
      LinkButtonTitle: [''],
      LinkButtonLink: [''],
    });
  }

  
  
  getUmyotubeTitleControl(index: number) {
    return this.UmyotubeVideos.at(index).get('umyotubeTitle') as FormControl;
  }
  
  getUmyotubeLinkControl(index: number) {
    return this.UmyotubeVideos.at(index).get('umyotubeLink') as FormControl;
  }
  getVimeoVideoTitleControl(index: number) {
    return this.VimeoVideos.at(index).get('vimeoVideoTitle') as FormControl;
  }
  
  getVimeoVideoLinkControl(index: number) {
    return this.VimeoVideos.at(index).get('vimeoVideoLink') as FormControl;
  }
  getLinkButtonTitleControl(index: number) {
    return this.LinkButton.at(index).get('LinkButtonTitle') as FormControl;
  }
  
  getLinkButtonLinkControl(index: number) {
    return this.LinkButton.at(index).get('LinkButtonLink') as FormControl;
  }
  getYoutubeTitleControl(index: number) {
    return this.YoutubeVideos.at(index).get('youtubeTitle') as FormControl;
  }
  
  getYoutubeLinkControl(index: number) {
    return this.YoutubeVideos.at(index).get('youtubeLink') as FormControl;
  }

  get YoutubeVideos() {
    return this.Form.get('YoutubeVideos') as FormArray;
  }


  get UmyotubeVideos() {
    return this.Form.get('UmyotubeVideos') as FormArray;
  }
  get VimeoVideos() {
    return this.Form.get('VimeoVideos') as FormArray;
  }
  get LinkButton() {
    return this.Form.get('LinkButton') as FormArray;
  }


  addYoutube() {
    this.YoutubeVideos.push(this.createYoutubeVideoGroup());
  }

  removeYoutube(index: number) {
    this.YoutubeVideos.removeAt(index);
  }
 
  addUmyotubeVideos() {
    this.UmyotubeVideos.push(this.createUmyotubeVideoGroup());
  }

  removeUmyotubeVideos(index: number) {
    this.UmyotubeVideos.removeAt(index);
  }

  addVimeoVideos() {
    this.VimeoVideos.push(this.createVimeoVideoGroup());
  }

  removeVimeoVideos(index: number) {
    this.VimeoVideos.removeAt(index);
  }
  addLinkButton() {
    this.LinkButton.push(this.createLinkButtonGroup());
  }

  removeLinkButton(index: number) {
    this.LinkButton.removeAt(index);
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


    const youtubeVideosArray = this.Form.get('YoutubeVideos') as FormArray;
    const umyotubeVideosArray = this.Form.get('UmyotubeVideos') as FormArray;
    const vimeoVideosArray = this.Form.get('VimeoVideos') as FormArray;
    const LinkButtonArray = this.Form.get('LinkButton') as FormArray;
    const youtubeData = youtubeVideosArray.controls.map((control) => {  
      const youtubeTitle = control.get('youtubeTitle').value;
      const youtubeLink = control.get('youtubeLink').value;
      return { youtubeTitle, youtubeLink };
    });
    const umyotubeData = umyotubeVideosArray.controls.map((control) => {  
      const umtotubeTitle = control.get('umyotubeTitle').value;
      const umyotubeLink = control.get('umyotubeLink').value;
      return { umtotubeTitle, umyotubeLink };
    });
    const vimeoVideosData = vimeoVideosArray.controls.map((control) => {  
      const vimeoVideoTitle = control.get('vimeoVideoTitle').value;
      const vimeoVideoLink = control.get('vimeoVideoLink').value;
      return { vimeoVideoTitle, vimeoVideoLink };
    });
    const linkButtonData = LinkButtonArray.controls.map((control) => {  
      const LinkButtonTitle = control.get('LinkButtonTitle').value;
      const LinkButtonLink = control.get('LinkButtonLink').value;
      return { LinkButtonTitle, LinkButtonLink };
    });

    

    
    

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
      youtubeVideos:youtubeData, 
      vimeoVideos:vimeoVideosData, 
      umyotubeVideos:umyotubeData, 
      linkButtons:linkButtonData, 
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
