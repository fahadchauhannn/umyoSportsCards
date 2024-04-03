import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template10',
  templateUrl: './template10.component.html',
  styleUrls: ['./template10.component.css']
})
export class Template10Component implements OnChanges {
  
  @Input() buttonColor: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() companyName: string;
  @Input() jobTitle: string;
  @Input() content: string; 
  @Input() email: string; 

  @Input() linkedin: string; 
  @Input() youtube: string; 
  @Input() twitter: string; 
  @Input() facebook: string; 
  @Input() instagram: string; 
  @Input() gpa: string; 
  @Input() age: string; 
  @Input() weight: string; 
  @Input() height: string; 
  @Input() school: string; 
  @Input() grade: string; 

  @Input() address: string; 
  @Input() phone: string; 
  @Input() phoneAllow: boolean; 
  @Input() forwardCard: boolean;  
  @Input() saveCard: boolean;  
  @Input() inviteCode: boolean;  
  @Input() referal: any; 
  @Input() photo: File;  // Change the type to File
  @Input() logo: File; 
  @Input() buttons: Array<{ LinkButtonLink: string, LinkButtonTitle: string }>;





  @Input() productImages: File;

  @Input() youtubeArray:any
  @Input() umyotubeArray:any
  @Input() vimeoArray:any
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeYouTubeLink(youtubeLink: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeLink);
  }

  imageSrc: string | ArrayBuffer | null = 'assets/images/john-doe-avatar.jpg';
  imageSrcLogo: string | ArrayBuffer | null = 'assets/images/unmasking-yourself.jpg';
  imageSrcProductImage: string | ArrayBuffer | null = 'assets/images/app-devices.jpg';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photo']) {
      this.loadImage();
    }
    if (changes['buttons']) {
      console.log(this.buttons);
    }
    if (changes['logo']) {
      this.loadImageLogo();
    }
    if (changes['productImages']) {
      this.loadImageProductImage();
    }
  }

 
  private loadImage(): void {
    if (this.photo) {
      
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrc = event.target?.result;
      };
      reader.readAsDataURL(this.photo);
      console.log(this.imageSrc);
    }
    
  }
  private loadImageLogo(): void {
    if (this.logo) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrcLogo = event.target?.result;
      };
      reader.readAsDataURL(this.logo);
    }
    
  }
  private loadImageProductImage(): void {
    if (this.productImages) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrcProductImage = event.target?.result;
      };
      reader.readAsDataURL(this.productImages);
    }
    
  }
  downloadVCard(): void {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${this.firstName} ${this.lastName}
ORG:${this.companyName}
EMAIL:${this.email}
TEL:${this.phone}
ADR:${this.address}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
