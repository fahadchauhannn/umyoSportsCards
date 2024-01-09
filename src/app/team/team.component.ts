import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})


export class TeamComponent {
  slides1: any[] = [];
  slides2: any[] = [];
  
  slideConfig1: any;
  slideConfig2: any;
  slideConfig3:any;

  constructor(){
    // $('.testimonials').slick({
    //   dots: false,
    //   arrows: true,
    //   autoplay: true,
    //   infinite: true,
    //   speed: 3000,
    //   slidesToShow: 1,
    //   adaptiveHeight: true
    // });

    this.slideConfig3 = {
      dots: false,
      arrows: true,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true
    };
    this.slideConfig1 = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      rtl: false,
      cssEase: 'linear'
    };
  
    this.slideConfig2 = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      rtl: true,
      cssEase: 'linear'
    };
  
    this.slides1 = [
      { img: 'assets/img/logo2/blackwall.png' },
      { img: 'assets/img/logo2/events.png' },
      { img: 'assets/img/logo2/logo2.png' },
      { img: 'assets/img/logo2/logo3.png' },
      { img: 'assets/img/logo2/logo4.png' },
      { img: 'assets/img/logo2/logo5.png' },
      { img: 'assets/img/logo2/logo6.png' },
      { img: 'assets/img/logo2/logo7.png' },
      { img: 'assets/img/logo2/logo8.png' },
      { img: 'assets/img/logo2/logo9.png' },
      { img: 'assets/img/logo2/logo10.png' },
  
    ];
  
  
    this.slides2 = [
      { img: 'assets/img/logo2/logo11.png' },
      { img: 'assets/img/logo2/logo12.png' },
      { img: 'assets/img/logo2/logo13.png' },
      { img: 'assets/img/logo2/logo14.png' },
      { img: 'assets/img/logo2/logo15.png' },
      { img: 'assets/img/logo2/logo16.png' },
      { img: 'assets/img/logo2/pledge.png' },
      { img: 'assets/img/logo2/logo9.png' },
      { img: 'assets/img/logo2/umyo_market.png' },
      { img: 'assets/img/logo2/logo8.png' },
      { img: 'assets/img/logo2/umyodate.png' },
  
    ];
  
  
  }
 
}

