import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent implements OnInit {
  id: any = '';
  description: string = '';
  expire_in: any;
  image: string = '';
  limit: any;
  logo: any;
  net_price: any;
  price: any;
  product_image: any;
  social_media_listing: any;
  umyotube: any;
  videos: any;
  vimeo: any;
  website: any;
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.route.params.subscribe((params) => {
      const idParam = params['id'];
      if (idParam) {
        const packageId = +idParam;

        this.apiService.getPackageById(packageId).subscribe(
          (response) => {
            this.id = response.Package.id;
            this.description = response.Package.description;
            this.expire_in = response.Package.expire_in;
            this.image = response.Package.image;
            this.limit = response.Package.limit;
            this.logo = response.Package.logo;
            this.net_price = response.Package.net_price;
            this.price = response.Package.price;
            this.product_image = response.Package.product_image;
            this.social_media_listing = response.Package.social_media_listing;
            this.umyotube = response.Package.umyotube;
            this.videos = response.Package.videos;
            this.vimeo = response.Package.vimeo;
            this.website = response.Package.website;
            this.isLoading=false
          },
          (error) => {
            console.error('Error fetching package:', error);
          }
        );
      } else {
        
      }
    });
  }

  updatePackage() {
    this.isLoading = true;

    this.apiService.updatePackage(
      this.id,
      this.description,
      this.expire_in,
      this.image,
      this.limit,
      this.logo,
      this.net_price,
      this.price,
      this.product_image,
      this.social_media_listing,
      this.umyotube,
      this.vimeo,
      this.videos,
      this.website
    ).subscribe(
      (response) => {
        console.log('Update successful');
        this.isLoading = false;
        this.router.navigate(['admin/packages']);
      },
      (error) => {
        console.error('Error updating package:', error);
      }
    );
  }
}
