import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      PhoneNumber: any
      PhoneNumber2: any
      PhoneAllow: any
      ForwardCard: any
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
      card_id:any
      ConvertedPhoto:any
     ConvertedLogo:any
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
      user_id:this.id,
      card_id:this.card_id
    }

    this.apiService.getSingleCard(payload).subscribe(
      (response)=>{
          if(response.status=='Success'){
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
            this.PhoneAllow = response.Card.infoFormData.phoneTextAllow;
            this.ForwardCard = response.Card.infoFormData.showForwardButton;
            this.Photo = this.convertDataURLtoFile(response.Card.change_photo, 'photo');
            this.Logo = this.convertDataURLtoFile(response.Card.change_logo, 'logo');
            this.ProductImages = '';
            this.YoutubeTitle = response.Card.socialFormData?.youtubeVideos[0]?.youtubeTitle;
            this.YoutubeLink = response.Card.socialFormData?.youtubeVideos[0]?.youtubeLink;
            this.VimeoTitle = response.Card.socialFormData?.vimeoVideos[0]?.vimeoTitle;
            this.VimeoLink = response.Card.socialFormData?.vimeoVideos[0]?.vimeoLink;
            this.UmyotubeTitle = response.Card.socialFormData?.umyotubeVideos[0]?.umyotubeTitle;
            this.UmyotubeLink = response.Card.socialFormData?.umyotubeVideos[0]?.umyotubeLink;
            this.LinkButtonTitle = response.Card.socialFormData?.linkButtons[0]?.linkButtonTitle;
            this.LinkButtonLink = response.Card.socialFormData?.linkButtons[0]?.websiteLink;
            this.FacebookLink = response.Card.FacebookLink;
  
            
  
            this.referalCode = response.Card.infoFormData.inviteCode;
  
            
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
