import { Component,ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
export class CreateCardStepsComponent implements  AfterViewInit{
  ngAfterViewInit() {
    this.colorPickerLoaded = true;
    this.isLoading=false
  }
  displayStep(stepNumber: number) {
    console.log('display stepp');
    if (stepNumber >= 1 && stepNumber <= 3) {
      $(`.step-${this.currentStep}`).hide()

        


      $(`.step-${stepNumber}`).show() 



      this.currentStep = stepNumber 
    

      this.updateProgressBar()


  
    }
  }

  showLoadingModal:any;
  isLoading:any
  loadingTitle:any='Please Wait.';
  loadingMessage:any="Saving Your Card...";
  Form: FormGroup;
  colorOptions: string[] = ['red', 'green', 'yellow', 'olive', 'orange', 'teal', 'blue', 'violet', 'purple', 'pink'];
  selectedColor='red'
  productImagesQuantity:any
  referalCode:any
  colorPickerLoaded: boolean = false;
  templateId:any
  userPackageData:any
  ConvertedPhoto:any
 ConvertedLogo:any
 ConvertedProductImage:any
 
id=localStorage.getItem('user_id')
user_id  = parseInt(this.id, 10);
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
  
  changeComplete(color: any) {
    
    this.selectedColor = color.hex; // Update the selected color
  }

  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef, private apiService:ApiService,private route:ActivatedRoute,private router: Router,) {
    this.showLoadingModal=false
    this.isLoading=true
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

      JobTitle: 'Affiliate',
      ccontent: ['Thanks for checking out my virtual business card! I’m excited to introduce you to umyocards because I know you"ll enjoy it as much as I have. umyocards helps me keep track of my prospects, my team, and my time so I can get more accomplished every day. Feel freeto contact me with any questions.'],
      Email: 'team@goumyocards.com',
      Address: 'umyocards team',
      PhoneNumber:'99122301',
      PhoneNumber2: [''],
      PhoneAllow: [true],
      ForwardCard: [true],
      SaveCard: [true],
      InviteCode: [true],
      Photo: ['assets/images/john-doe-avatar.jpg'],
      Logo: ['assets/images/unmasking-yourself.jpg'],
      ProductImages: [['assets/images/app-devices.jpg']],



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
    const videoLimit = {
        "1 video link": 1,
        "2 video link": 2,
        "3 video link": 3,
        "Unlimited(General)": Infinity
    };

    const currentVideoCount = this.YoutubeVideos.value.length;
    const maxVideosAllowed = videoLimit[this.userPackageData.videos];

    if (currentVideoCount < maxVideosAllowed) {
        this.YoutubeVideos.push(this.createYoutubeVideoGroup());
    } else {
        alert(`You are only allowed to have ${maxVideosAllowed} youtube video link${maxVideosAllowed > 1 ? 's' : ''}`);
    }
}

  removeYoutube(index: number) {
    this.YoutubeVideos.removeAt(index);
  }
 
  addUmyotubeVideos() {
    
    const videoLimit = {
      "1 video link": 1,
      "2 video link": 2,
      "3 video link": 3,
      "Unlimited(General)": Infinity
  };

  const currentVideoCount = this.YoutubeVideos.value.length;
  const maxVideosAllowed = videoLimit[this.userPackageData.umyotube];

  if (currentVideoCount < maxVideosAllowed) {
    this.UmyotubeVideos.push(this.createUmyotubeVideoGroup());
  } else {
      alert(`You are only allowed to have ${maxVideosAllowed} umyotube video link${maxVideosAllowed > 1 ? 's' : ''}`);
  }




  }

  removeUmyotubeVideos(index: number) {
    this.UmyotubeVideos.removeAt(index);
  }

  addVimeoVideos() {
    
        
    const videoLimit = {
      "1 video link": 1,
      "2 video link": 2,
      "3 video link": 3,
      "Unlimited(General)": Infinity
  };

  const currentVideoCount = this.YoutubeVideos.value.length;
  const maxVideosAllowed = videoLimit[this.userPackageData.umyotube];

  if (currentVideoCount < maxVideosAllowed) {
    this.VimeoVideos.push(this.createVimeoVideoGroup());
  } else {
      alert(`You are only allowed to have ${maxVideosAllowed} vimeo video link${maxVideosAllowed > 1 ? 's' : ''}`);
  }


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
    if(this.userPackageData.logo=="No"){
      alert("You are not allowed to upload logo in your current package")
    }
    else{
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
   
  }


  onProductImagesChange(event: any): void {
    console.log('product image chagnedddd');
    const files = event?.target?.files;
    if (files) {
        const base64Images = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                base64Images.push(reader.result);
                if (base64Images.length === files.length) {

                    this.Form.patchValue({
                        ProductImages: base64Images,

                    });
                    this.ConvertedProductImage=base64Images
                    this.cdr.detectChanges();
                }
            };
        }
    }
}
  
  ngOnInit(): void {



    this.currentStep=1
   






    this.route.params.subscribe((params) => {
      this.templateId = params['id'];
      console.log(this.templateId);
  })

     // Fetch user data
     this.apiService.getUserById(this.user_id).subscribe(
      (response) => {
        if (response.status === 'Success') {
          this.referalCode = response.Users.refer_code;
          this.productImagesQuantity = response.Users.PackageData.product_image;
          this.userPackageData = response.Users.PackageData
          console.log('quantity');
          console.log(this.productImagesQuantity);

          // Set validators based on productImagesQuantity
          if (this.productImagesQuantity === '3 image') {
            console.log('3 image validation applied');
            
            this.Form.controls['ProductImages'].setValidators(
              Validators.maxLength(3)
            );
          }
          if (this.productImagesQuantity === '1 image') {
            console.log('3 image validation applied');
            this.Form.controls['ProductImages'].setValidators(
              Validators.maxLength(1)
            );
          }
          if (this.productImagesQuantity === 'No image') {
            this.Form.controls['ProductImages'].setValidators(
              Validators.maxLength(1))
          }
          

          // Trigger validation status change subscription
          this.Form.controls['ProductImages'].statusChanges.subscribe(


            
            (status) => {
              console.log('status changeddd');
              if (this.productImagesQuantity === 'No image') {
                if (JSON.stringify(this.Form.controls['ProductImages'].value) !== JSON.stringify(['assets/images/app-devices.jpg'])) {
                  alert("You are not allowed to upload a product image. Please upgrade your package to use this feature.");
                  this.Form.controls['ProductImages'].setValue(['assets/images/app-devices.jpg']);
                }
              }
              if (status === 'INVALID') {
                if (this.productImagesQuantity === '3 image') {
                  this.Form.controls['ProductImages'].setValue(['assets/images/app-devices.jpg']);
                  alert('You are only allowed to upload a maximum of 3 product images in your current package.');
                }
                if (this.productImagesQuantity === '1 image') {
                  this.Form.controls['ProductImages'].setValue(['assets/images/app-devices.jpg']);
                  alert('You are only allowed to upload a maximum of 1 product image in your current package.');
                }
              }
            }
          );

        } else {
          console.log('error fetching user data on create card steps');
        }
      },
      (error) => {
        console.log(
          'error fetching request to get user data on create card steps'
        );
      }
    );

    
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

    this.showLoadingModal=true;
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
      const umyotubeTitle = control.get('umyotubeTitle').value;
      const umyotubeLink = control.get('umyotubeLink').value;
      return { umyotubeTitle, umyotubeLink };
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
    email:this.Form.value.Email,
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
      changeProductImages:JSON.stringify(this.ConvertedProductImage),
      colorTheme:this.Form.value.selectedColor,
      user_id:this.id,
      infoFormData:JSON.stringify(infoFormData),
      socialFormData: JSON.stringify(SocialFormData),


    }
    
    
  console.log(formData);

  this.apiService.saveCard(formData).subscribe(
    (response)=>{
      this.showLoadingModal=false;
      if(response.status!='Failed'){
        this.showLoadingModal=false;
        alert("Card Saved! ")
        this.router.navigate(['/cards']);
      }
      else{
        this.showLoadingModal=false;
        alert("Failed! "+ response.message)

      }

    },(error)=>{
      this.showLoadingModal=false;
alert("Failed! " + error)
    }
  )

  

  
} 

}
