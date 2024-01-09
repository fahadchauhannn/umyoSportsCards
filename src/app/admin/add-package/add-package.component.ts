import { Component } from '@angular/core';
import {ApiService} from '../../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  id:any=""
  description:string=''
  expire_in:any
  image:string=''
  limit:any
  logo:any
  net_price:any
  price:any
  product_image:any
  social_media_listing:any
  umyoutube:any
  videos:any
  vimeo:any
  website:any
  isLoading:boolean=false;
  constructor(private apiService:ApiService,private router: Router){}


  addPackage() {
    this.isLoading=true
    this.apiService.addPackage(this.id, this.description,this.expire_in, this.image,this.limit,this.logo,this.net_price,this.price,this.product_image,this.social_media_listing,this.umyoutube,this.vimeo,this.videos,this.website).subscribe(
      (response) => {
        console.log('Successful');
        this.isLoading=false
        this.router.navigate(['admin/packages']);
        
      }
    );
  }
}
