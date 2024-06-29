import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-template11',
  templateUrl: './template11.component.html',
  styleUrls: ['./template11.component.css'],
  providers: [NgbCarouselConfig],
})
export class Template11Component implements OnChanges {
  
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
  @Input() umyotubeArray:any
  @Input() vimeoArray:any
  @Input() productImages: any = [['assets/images/app-devices.jpg']];
  @Input() youtubeArray: any;



  


   sanitizedUrlsCache: Map<string, SafeResourceUrl> = new Map<string, SafeResourceUrl>();

  constructor(private sanitizer: DomSanitizer, private router: Router,config: NgbCarouselConfig) {
    config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.showNavigationArrows=true
    
  }



  // productImages2: string[] = ['assets/images/app-devices.jpg','assets/images/app-devices.jpg','assets/images/app-devices.jpg'];

  slickModalConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<div class="custom-prev-arrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="custom-next-arrow"><i class="fa fa-chevron-right"></i></div>',
    
    
    
    // Add more configuration options as needed
  };

  imageSrc: string | ArrayBuffer | null = 'assets/images/john-doe-avatar.jpg';
  imageSrcLogo: string | ArrayBuffer | null = 'assets/images/unmasking-yourself.jpg';
  imageSrcProductImage: string | ArrayBuffer | null = 'assets/images/app-devices.jpg';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is the product image');
console.log(this.productImages);
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
      console.log('product image changed ');
    }
    if (changes['youtubeArray']) {
      // Clear the cache when youtubeArray2 changes
      this.sanitizedUrlsCache.clear();
    }
    if (changes['umyotubeArray']) {
      console.log(this.umyotubeArray);
      // Clear the cache when youtubeArray2 changes
      this.sanitizedUrlsCache.clear();
    }

   
  }
  convertToEmbeddedFormat(url: string): string {
    // Extract video ID from the URL
    const videoId = this.extractVideoId(url);
    // Construct the embedded format URL
    if(videoId==""){
return ""
    }
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  extractVideoId(url: string): string {
    // Extract video ID from the URL
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }

  validateYouTubeUrl(url: string): boolean {
    // Regular expression to match YouTube URL formats
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    return youtubeRegex.test(url);
  }


  sanitizeYouTubeUrl(url: string): SafeResourceUrl {
    let formatedUrl=this.convertToEmbeddedFormat(url)
   
    if (this.sanitizedUrlsCache.has(formatedUrl)) {
      return this.sanitizedUrlsCache.get(formatedUrl)!;
    } else {
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(formatedUrl);
      this.sanitizedUrlsCache.set(formatedUrl, sanitizedUrl);
      return sanitizedUrl;
    }
  }
 
  formatVimeoUrl(url: string): string {
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      const videoId = match[1];
      return `https://player.vimeo.com/video/${videoId}?h=b550e8409e&title=0&byline=0&portrait=0`;
    }
    return '';
  }

 sanitizeVimeo(url: string): SafeResourceUrl {
    const formattedUrl = url
    if (formattedUrl === '') {
      return '';
    }
    if (this.sanitizedUrlsCache.has(formattedUrl)) {
      return this.sanitizedUrlsCache.get(formattedUrl)!;
    } else {
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(formattedUrl);
      this.sanitizedUrlsCache.set(formattedUrl, sanitizedUrl);
      return sanitizedUrl;
    }
  }

   // Dailymotion functions
   convertDailymotionToEmbeddedFormat(url: string): string {
    const videoId = this.extractDailymotionVideoId(url);
    return videoId ? `https://www.dailymotion.com/embed/video/${videoId}` : '';
  }

  extractDailymotionVideoId(url: string): string {
    const dailymotionRegex = /https:\/\/dai\.ly\/([a-zA-Z0-9]+)/;
    const match = url.match(dailymotionRegex);
    return match && match[1] ? match[1] : '';
  }

  sanitizeDailymotionUrl(url: string): SafeResourceUrl {
    const formattedUrl = this.convertDailymotionToEmbeddedFormat(url);
    if(formattedUrl==""){
      return ""
    }
    if (this.sanitizedUrlsCache.has(formattedUrl)) {
      return this.sanitizedUrlsCache.get(formattedUrl)!;
    } else {
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(formattedUrl);
      this.sanitizedUrlsCache.set(formattedUrl, sanitizedUrl);
      return sanitizedUrl;
    }
  }
  sanitizeumyovideo(url: string): SafeResourceUrl {
    let formatedUrl=url
   
    if (this.sanitizedUrlsCache.has(formatedUrl)) {
      return this.sanitizedUrlsCache.get(formatedUrl)!;
    } else {
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(formatedUrl);
      this.sanitizedUrlsCache.set(formatedUrl, sanitizedUrl);
      return sanitizedUrl;
    }
  }
  
  navigateToHome(): void {
    // Assuming 'referal' holds the referral ID
    localStorage.clear()
    const referralId = this.referal || ''; // Default to empty string if referral ID is not available
    this.router.navigate(['/'], { queryParams: { referralId } });
  }
  

  
 
  private loadImage(): void {
    if (this.photo && this.phone[0]!='assets/images/john-doe-avatar.jpg') {
      
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrc = event.target?.result;
      };
      reader.readAsDataURL(this.photo);
      console.log(this.imageSrc);
    }
    
  }
  private loadImageLogo(): void {
    if (this.logo && this.logo[0]!='assets/images/unmasking-yourself.jpg') {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrcLogo = event.target?.result;
      };
      reader.readAsDataURL(this.logo);
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
