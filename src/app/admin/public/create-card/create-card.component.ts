// create-card.component.ts
import { Component, OnInit,AfterViewInit } from '@angular/core';
import 'jquery';
import 'jquery-modal';

declare var $: any;

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements AfterViewInit {
  private animating: boolean = false;
  slickCarouselConfig:any
  isLoading:boolean=false
  constructor(){
   
  }
  ngAfterViewInit(): void {
    this.isLoading=true
    this.slickCarouselConfig = {
      // Slick carousel configuration options here
      slidesToShow: 3,
      
      slidesToScroll: 1,
      nextArrow: '<div class="slick-next"></div>',
      prevArrow: '<div class="slick-prev"></div>',
      autoplay:true,
        arrows: true,
        
        infinite: true,
        
        adaptiveHeight: true
      
    };
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  ngOnInit() {
    this.isLoading=true
    // Script 1
    $(".next").click(() => {
      if (this.animating) return false;

      this.animating = true;

      let current_fs = $(event.target).parent();
      let next_fs = $(event.target).parent().next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li")
        .eq($("fieldset").index(next_fs))
        .addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: (now:any, mx:any) => {
            
            
            let scale = 1 - (1 - now) * 0.2;
            
            let left = now * 50 + "%";
            
            let opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute"
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: () => {
            current_fs.hide();
            this.animating = false;
          },
          
          easing: "easeInOutBack"
        }
      );

      
      return false;
    });

    // Script 2
    $(".previous").click(() => {
      if (this.animating) return false;

      this.animating = true;

      let current_fs = $(event.target).parent();
      let previous_fs = $(event.target).parent().prev();

      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: (now, mx) => {
            
            
            let scale = 0.8 + (1 - now) * 0.2;
            
            let left = (1 - now) * 50 + "%";
            
            let opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity
            });
          },
          duration: 800,
          complete: () => {
            current_fs.hide();
            this.animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack"
        }
      );

    
      return false;
    });
  

    
   
    
    $(document).ready(() => {
      $('#select_template').modal('show');
    });
    
  }
}
