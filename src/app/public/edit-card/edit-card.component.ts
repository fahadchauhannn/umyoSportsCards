import { Component,ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
declare var $: any;

import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent  implements  AfterViewInit{

  selectedColor:any
      FirstName: any
      LastName: any
      CompanyName: any
      JobTitle: any
      ccontent:any
      Email: any
      Address: any
      PhoneNumber: any
      PhoneNumber2: any
      PhoneAllow: any
      ForwardCard: any
      colorPickerLoaded: boolean = false;
      SaveCard: any
      InviteCode: any
      Photo:any
      Logo: any
      ProductImages: any
      YoutubeTitle:any
      YoutubeLink:any
      VimeoTitle:any
      VimeoLink:any
      UmyotubeTitle:any
      UmyotubeLink:any
      LinkButtonTitle:any
      LinkButtonLink:any
      FacebookLink:any
      userPackageId:any
      Facebook:any
      Youtube:any
      Linkedin:any
      Twitter:any
      Snapchat:any
      isLoading:any
      Instagram:any
      Voxer:any
      Line:any
      Pinterest:any
      Whatsapp:any
      Skype:any
      CardTitle:any
      referalCode:any
  
      templateId:any=1
      userPackageData:any
      card_id:any
      ConvertedPhoto:any
     ConvertedLogo:any
     ConvertedProductImage:any
     iPic:any
     showLoadingModal:any=false
     loadingTitle:any="Please Wait."
     loadingMessage:any="Updating Your Card..."
     iLogo:any
  iProduct: any;

     changeComplete(color: any) {
      
      this.selectedColor = color.hex; // Update the selected color
    }
    
     ngAfterViewInit() {
      this.colorPickerLoaded = true;

      
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
  
  
  productImagesQuantity:any
 
id=localStorage.getItem('user_id')
user_id  = parseInt(this.id, 10);
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
  

  convertDataURLtoFile(dataURL: string, fileName: string): File | null {
    if (!dataURL || typeof dataURL !== 'string' || !dataURL.startsWith('data:image')) {
      console.error('Invalid data URL');
      return null;
    }
  
    const byteString = atob(dataURL.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    const blob = new Blob([ab], { type: 'image/png' });
    return new File([blob], fileName, { type: 'image/png' });
  }
  

  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef, private apiService:ApiService,private route:ActivatedRoute,private router: Router,) {
    
    this.route.params.subscribe((params) => {
      this.card_id = params['id'];
  })
    
      
    this.Form = this.fb.group({
      selectedColor:['red'],
      FirstName: ['John'],
      LastName: ['Doe'],
      Gpa: [''],
      Age: [''],
      Height: [''],
      Weight: [''],
      Grade: [''],
      School: [''],

      CompanyName: ['UMYO Network'],
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
      ProductImages: [['assets/images/app-devices.jpg']],
      YoutubeTitle:[''],
      YoutubeLink:['https://www.youtube.com/embed/soXhe4aEsTU'],
      VimeoTitle:[''],
      VimeoLink:[''],
      UmyotubeTitle:[''],
      UmyotubeLink:[''],
      LinkButtonTitle:[''],
      LinkButtonLink:[''],
      FacebookLink:[''],
      YoutubeVideos: this.fb.array([this.createYoutubeVideoGroup()]),

      UmyotubeVideos:this.fb.array([this.createUmyotubeVideoGroup()]),
      VimeoVideos:this.fb.array([this.createVimeoVideoGroup()]),
      LinkButton:this.fb.array([this.createLinkButtonGroup()]),
      Facebook:'',
      Youtube:'',
      Linkedin:'',
      Twitter:'',
      Snapchat:'',
      Instagram:'',
      Voxer:'',
      Line:'',
      Pinterest:'',
      Whatsapp:'',
      Skype:'',
      CardTitle:'Title',



    

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
      this.convertFileToDataURL(this.Form.value.Photo).then((dataUrl) => {
        this.ConvertedPhoto = dataUrl;
      }),
      // Manually trigger change detection
      this.cdr.detectChanges();
    }
  }
  onLogoChange(event: any): void {
    if (this.userPackageData.logo === "No") {
      alert("You are not allowed to upload a logo in your current package.");
      return;
    }
  
    if (this.userPackageId === 14) {
      alert("You are not allowed to update your logo image in your current package.");
      return;
    }
console.log('oaaaaakege iddddddddddddddd');
    console.log(this.userPackageId);
  
    const file = event?.target?.files[0];
    if (file) {
      this.Form.patchValue({ Logo: file });
      this.convertFileToDataURL(this.Form.value.Logo).then((dataUrl) => {
        this.ConvertedLogo = dataUrl;
      }).finally(() => {
        this.cdr.detectChanges();
      });
    }
  }
  

  


  
  populateYoutube(formArrayName: string, data: any[]) {
    const formArray = this.Form.get(formArrayName) as FormArray;
  
    if (data && data.length > 0) {
      // Clear existing controls
      while (formArray.length !== 0) {
        formArray.removeAt(0);
      }
  
      // Add controls based on the length of the data array
      for (const item of data) {
        formArray.push(this.fb.group({
          youtubeTitle: item.youtubeTitle,
          youtubeLink: item.youtubeLink,
          // ... Add other controls based on your data structure
        }));
      }
    }
  }
  populateUmyotube(formArrayName: string, data: any[]) {
    const formArray = this.Form.get(formArrayName) as FormArray;
  
    if (data && data.length > 0) {
      // Clear existing controls
      while (formArray.length !== 0) {
        formArray.removeAt(0);
      }
  
      // Add controls based on the length of the data array
      for (const item of data) {
        formArray.push(this.fb.group({
          umyotubeTitle: item.umyotubeTitle,
          umyotubeLink: item.umyotubeLink,
          
        }));
      }
    }
  }
  populateVimeo(formArrayName: string, data: any[]) {
    const formArray = this.Form.get(formArrayName) as FormArray;
  
    if (data && data.length > 0) {
      while (formArray.length !== 0) {
        formArray.removeAt(0);
      }
      for (const item of data) {
        formArray.push(this.fb.group({
          vimeoVideoTitle: item.vimeoVideoTitle,
          vimeoVideoLink: item.vimeoVideoLink,
          
        }));
      }
    }
  }
  populateLink(formArrayName: string, data: any[]) {
    const formArray = this.Form.get(formArrayName) as FormArray;
  
    if (data && data.length > 0) {
      // Clear existing controls
      while (formArray.length !== 0) {
        formArray.removeAt(0);
      }
      for (const item of data) {
        formArray.push(this.fb.group({
          LinkButtonTitle: item.LinkButtonTitle,
          LinkButtonLink: item.LinkButtonLink,
          
        }));
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

    this.isLoading=true

    this.currentStep=1
   

    const payload={
      user_id:this.id,
      card_id:this.card_id
    }
    



    this.apiService.getSingleCard(payload).subscribe(
      (response)=>{

        this.isLoading=false
        console.log(this.isLoading);
        const socialFormData = response.Card.socialFormData;

        this.populateYoutube('YoutubeVideos', socialFormData.youtubeVideos);
        this.populateUmyotube('UmyotubeVideos', socialFormData.umyotubeVideos);
        this.populateVimeo('VimeoVideos', socialFormData.vimeoVideos);
        this.populateLink('LinkButton', socialFormData.linkButtons);


          if(response.status=='Success'){
            this.templateId=response.Card.infoFormData.templateId
            this.selectedColor=response.Card.colorTheme
            this.Form.get('selectedColor').setValue(response.Card.colorTheme);
            this.Form.get('CardTitle').setValue(response.Card.infoFormData.cardTitle);
            this.Form.get('FirstName').setValue(response.Card.infoFormData.firstName);
            this.Form.get('LastName').setValue(response.Card.infoFormData.lastName);
            this.Form.get('CompanyName').setValue(response.Card.infoFormData.companyName);
            this.Form.get('JobTitle').setValue(response.Card.infoFormData.jobTitle);
            this.Form.get('ccontent').setValue(response.Card.infoFormData.aboutText);
            this.Form.get('Email').setValue(response.Card.infoFormData.email);
            this.Form.get('Address').setValue(response.Card.infoFormData.address);
            this.Form.get('PhoneNumber').setValue(response.Card.infoFormData.phoneNumber);
            this.Form.get('PhoneNumber2').setValue(response.Card.infoFormData.alternativePhoneNo);
            this.Form.get('PhoneAllow').setValue(response.Card.infoFormData.phoneTextAllow);
            this.Form.get('ForwardCard').setValue(response.Card.infoFormData.showForwardButton);
            this.Form.get('SaveCard').setValue(response.Card.infoFormData.showSaveButton);
            this.Form.get('InviteCode').setValue(response.Card.infoFormData.showInviteCode);
            this.Form.get('Gpa').setValue(response.Card.infoFormData.gpa);
            this.Form.get('Age').setValue(response.Card.infoFormData.age);
            this.Form.get('Weight').setValue(response.Card.infoFormData.weight);
            this.Form.get('Height').setValue(response.Card.infoFormData.height);
            this.Form.get('Grade').setValue(response.Card.infoFormData.grade);
            this.Form.get('School').setValue(response.Card.infoFormData.school);
            
            this.Form.get('Photo').setValue(this.convertDataURLtoFile(response.Card.change_photo, 'photo'));
            this.Form.get('Logo').setValue(this.convertDataURLtoFile(response.Card.change_logo, 'logo'));
            this.iPic=response.Card.change_photo
            this.iLogo=response.Card.change_logo
            this.Form.get('ProductImages').setValue(JSON.parse(response.Card.changeProductImages));
              this.iProduct=response.Card.changeProductImages
          

            this.Form.get('Facebook').setValue(response.Card.socialFormData.facebook);
            


            this.Form.get('Youtube').setValue(response.Card.socialFormData.youtube);
            
            
            this.Form.get('Linkedin').setValue(response.Card.socialFormData.linkedin);
            this.Form.get('Twitter').setValue(response.Card.socialFormData.twitter);
            this.Form.get('Snapchat').setValue(response.Card.socialFormData.snapchat);
            this.Form.get('Instagram').setValue(response.Card.socialFormData.instagram);
            this.Form.get('Voxer').setValue(response.Card.socialFormData.voxerID);
            this.Form.get('Line').setValue(response.Card.socialFormData.lineID);
            this.Form.get('Pinterest').setValue(response.Card.socialFormData.pinterest);
            this.Form.get('Whatsapp').setValue(response.Card.socialFormData.whatsappID);
            this.Form.get('Skype').setValue(response.Card.socialFormData.skypeID);
            this.Form.get('CardTitle').setValue(response.Card.infoFormData.cardTitle);
            

            this.referalCode=response.Card.infoFormData.inviteCode
            this.isLoading=false
            
          }
          else{
            this.isLoading=false
            alert('failed to fetch card')
          }
      },(error)=>{
        this.isLoading=false
        alert('failed to fetch card'+error.message)

      }
      )

   


// Fetch user data
this.apiService.getUserById(this.user_id).subscribe(
  (response) => {
    if (response.status === 'Success') {
      this.referalCode = response.Users.refer_code;
      this.productImagesQuantity = response.Users.PackageData.product_image;
      this.userPackageData = response.Users.PackageData
      this.userPackageId=response.Users.package_id  

      // Set validators based on productImagesQuantity
      if (this.productImagesQuantity === '3 image') {
      
        
        this.Form.controls['ProductImages'].setValidators(
          Validators.maxLength(3)
        );
      }
      if (this.productImagesQuantity === '1 image') {
      
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

  
   
    
  }
  

  
  currentStep:any

check(){
  
  
}


 
  

  updateProgressBar() {
    const progressPercentage = ((this.currentStep - 2) / 4) * 100;
    $('.progress-bar').css('width', progressPercentage + '%');
  }
  
 

  convertFileToDataURL(file: File): Promise<string> {
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
    this.showLoadingModal=true
    
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
    inviteCode:this.referalCode,



    

    gpa:this.Form.value.Gpa,
    age:this.Form.value.Age,
    height:this.Form.value.Height,
    weight:this.Form.value.Weight,
    grade:this.Form.value.Grade,
    school:this.Form.value.School,

}
 

    let formData={
      buttonColor:this.Form.value.selectedColor,
      cardTitle:this.Form.value.CardTitle,
      change_logo:this.iLogo,
      change_photo:this.iPic,
      changeProductImages:this.iProduct,  
      

      colorTheme:this.Form.value.selectedColor,
      user_id:this.id,
      card_id:this.card_id,
      infoFormData:JSON.stringify(infoFormData),
      socialFormData: JSON.stringify(SocialFormData),


    }

    if(this.ConvertedPhoto!=null && this.ConvertedPhoto!='' && this.ConvertedPhoto!=undefined){
      console.log('new  image used.');
      console.log(this.ConvertedPhoto);
      formData.change_photo = this.ConvertedPhoto;
    }
    
    else{
      console.log('old image used.');
      formData.change_photo = this.iPic
    }

   


    if(this.ConvertedLogo!=null && this.ConvertedLogo!='' && this.ConvertedLogo!=undefined){
      formData.change_logo = this.ConvertedLogo;
    }
    
    else{
      formData.change_logo = this.iLogo
    }


  





    if(this.ConvertedProductImage!=null && this.ConvertedProductImage!='' && this.ConvertedProductImage!=undefined){
      formData.changeProductImages = JSON.stringify(this.ConvertedProductImage)
    }
    
    else{
      formData.changeProductImages = this.iProduct
    }


  
  

  this.apiService.updateCard(formData).subscribe(
    (response)=>{
      if(response.status!='Failed'){
        this.showLoadingModal=false
        alert("Card Updated! ")
        this.router.navigate(['/cards']);
      }
      else{
        this.showLoadingModal=false
        alert("Failed! "+ response.message)

      }

    },(error)=>{
      this.showLoadingModal=false
alert("Failed! " + error)
    }
  )

  

  
} 

}
