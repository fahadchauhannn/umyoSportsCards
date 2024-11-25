import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.css']
})
export class ShareCardComponent implements  OnInit{

  selectedColor:any
      FirstName: any
      LastName: any
      CompanyName: any
      JobTitle: any
      ccontent:any
      Email: any
      Address: any
      loading: boolean = true;
      PhoneNumber: any
      PhoneNumber2: any
      PhoneAllow: any
      ForwardCard: any
      SaveCard: any
      InviteCode: any
      Photo:any
      Logo: any
      ProductImages: any
      YoutubeArray:any
      UmyotubeArray:any
      VimeoVideoArray:any
      VimeoTitle:any
      VimeoLink:any
      UmyotubeTitle:any
      UmyotubeLink:any
      buttons:any
      FacebookLink:any
      
      Facebook:any
      Youtube:any
      Linkedin:any
      Twitter:any
      Snapchat:any
      Instagram:any
      Voxer:any
      Line:any
      Pinterest:any
      Whatsapp:any
      Skype:any
      CardTitle:any
      referalCode:any
  
      templateId:any=1
      
gpa:any
school:any
grade:any
height:any
age:any
weight:any

      card_id:any
      ConvertedPhoto:any
     ConvertedLogo:any
     shareCardId:any
     ConvertedProductImage:any



     id=localStorage.getItem('user_id')
user_id  = parseInt(this.id, 10);



  constructor(private apiService: ApiService,private route:ActivatedRoute,private router: Router,)  {
    this.route.params.subscribe((params) => {
      this.card_id = params['id'];
  })

  }


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



  ngOnInit(): void {
    const payload={
      
      card_id:this.card_id
    }

    
this.apiService.incrementCardView(this.card_id).subscribe(
  (response)=>{
      console.log('card view updated');
  },(error)=>{
    console.log('error updating card view ');
  }
)


    this.apiService.getSingleCard(payload).subscribe(
      (response)=>{
          if(response.status=='Success'){
            this.shareCardId=response.Card.id
            this.templateId=response.Card.infoFormData.templateId
            this.selectedColor = response.Card.colorTheme;
            this.FirstName = response.Card.infoFormData.firstName;
            this.LastName = response.Card.infoFormData.lastName;
            this.CompanyName = response.Card.infoFormData.companyName;
            this.JobTitle = response.Card.infoFormData.jobTitle;
            this.ccontent = response.Card.infoFormData.aboutText;
            this.Email = response.Card.infoFormData.email;
            this.Address = response.Card.infoFormData.address;
            this.PhoneNumber = response.Card.infoFormData.phoneNumber;
            this.PhoneNumber2 = response.Card.infoFormData.alternativePhoneNo;

            
            this.gpa = response.Card.infoFormData?.gpa;
            this.age = response.Card.infoFormData?.age;
            this.weight = response.Card.infoFormData?.weight;
            this.grade = response.Card.infoFormData?.grade;
            this.height = response.Card.infoFormData?.height;
            this.school = response.Card.infoFormData?.school;


            this.Facebook = response.Card.socialFormData.facebook.replace(/\\/g, '');
            this.Twitter = response.Card.socialFormData.twitter.replace(/\\/g, '');
            this.Youtube = response.Card.socialFormData.youtube.replace(/\\/g, '');
            this.Instagram = response.Card.socialFormData.instagram.replace(/\\/g, '');
            this.Linkedin = response.Card.socialFormData.linkedin.replace(/\\/g, '');
            this.PhoneAllow = response.Card.infoFormData.phoneTextAllow;
            this.ForwardCard = response.Card.infoFormData.showForwardButton;
            this.SaveCard = response.Card.infoFormData.showSaveButton;
            this.InviteCode = response.Card.infoFormData.showInviteCode;
            console.log('phone allow'+this.PhoneAllow);
            console.log('forward card'+ this.ForwardCard);
            console.log('save card'+ this.SaveCard);
            console.log('invite code'+this.InviteCode);
            this.Photo = this.convertDataURLtoFile(response.Card.change_photo, 'photo');
            this.Logo = this.convertDataURLtoFile(response.Card.change_logo, 'logo');
            this.ProductImages = JSON.parse(response.Card.changeProductImages);
            
            console.log(this.ProductImages);
            this.YoutubeArray = response.Card.socialFormData?.youtubeVideos;
            this.UmyotubeArray = response.Card.socialFormData?.umyotubeVideos;
            this.VimeoVideoArray = response.Card.socialFormData?.vimeoVideos;
            
            this.VimeoTitle = response.Card.socialFormData?.vimeoVideos[0]?.vimeoTitle;
            this.VimeoLink = response.Card.socialFormData?.vimeoVideos[0]?.vimeoLink;
            this.UmyotubeTitle = response.Card.socialFormData?.umyotubeVideos[0]?.umyotubeTitle;
            this.UmyotubeLink = response.Card.socialFormData?.umyotubeVideos[0]?.umyotubeLink;
            this.buttons = response.Card.socialFormData?.linkButtons;
            
            this.FacebookLink = response.Card.FacebookLink;
  
            
  
            this.referalCode = response.Card.infoFormData.inviteCode;
  this.loading=false
            
          }
          else{
            alert('failed to fetch card')
          }
      },(error)=>{
        alert('failed to fetch card'+error.message)

      }
      )


  }

}
