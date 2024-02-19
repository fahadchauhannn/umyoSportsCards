import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any; 

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements AfterViewInit{



  ngAfterViewInit(): void {
    
    $(document).ready(function() {
  
  var slider1 = $('.slider-1').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed:5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          fade: false,
          rtl: false,
          cssEase: 'linear',
          responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            speed:5500,
            centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
            slidesToScroll: 1
            
            }
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 3,
              speed:6000,
              slidesToScroll: 1
              }
          },
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 2,
              speed:6000,
              slidesToScroll: 1
              }
          },
          
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
  
  
         ]
      });
  
  var slider2 = $('.slider-2').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed:5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          fade: false,
          rtl: true,
          cssEase: 'linear',
          responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            speed:5500,
            centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
            slidesToScroll: 1
            
            }
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 3,
              speed:6000,
              slidesToScroll: 1
              }
          },
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 2,
              speed:6000,
              slidesToScroll: 1
              }
          },
          
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
  
         ]
      });
  
  
  });
  
   
        $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button2').click(function() {
    $('.moretext2').slideToggle();
    if ($('.moreless-button2').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
       
        $('.moreless-button3').click(function() {
    $('.moretext3').slideToggle();
    if ($('.moreless-button3').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button4').click(function() {
    $('.moretext4').slideToggle();
    if ($('.moreless-button4').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button5').click(function() {
    $('.moretext5').slideToggle();
    if ($('.moreless-button5').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button6').click(function() {
    $('.moretext6').slideToggle();
    if ($('.moreless-button6').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
       
        $('.moreless-button7').click(function() {
    $('.moretext7').slideToggle();
    if ($('.moreless-button7').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        
        $('.moreless-button8').click(function() {
    $('.moretext8').slideToggle();
    if ($('.moreless-button8').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button9').click(function() {
    $('.moretext9').slideToggle();
    if ($('.moreless-button9').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
       
        $('.moreless-button10').click(function() {
    $('.moretext10').slideToggle();
    if ($('.moreless-button10').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button11').click(function() {
    $('.moretext11').slideToggle();
    if ($('.moreless-button11').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
       
        $('.moreless-button12').click(function() {
    $('.moretext12').slideToggle();
    if ($('.moreless-button12').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
      
        $('.moreless-button13').click(function() {
    $('.moretext13').slideToggle();
    if ($('.moreless-button13').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
       
        $('.moreless-button14').click(function() {
    $('.moretext14').slideToggle();
    if ($('.moreless-button14').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
});


// vegetable carousel
$(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


// Modal Video

    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })




// Product Quantity
$('.quantity button').on('click', function () {
    var button = $(this);
    var oldValue = button.parent().parent().find('input').val();
    if (button.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    button.parent().parent().find('input').val(newVal);
});
  }


  videoUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
  
    const videoPath = 'assets/video.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
    
  }
}
