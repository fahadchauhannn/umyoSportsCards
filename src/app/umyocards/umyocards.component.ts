import { Component ,AfterViewInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any; 


@Component({
  selector: 'app-umyocards',
  templateUrl: './umyocards.component.html',
  styleUrls: ['./umyocards.component.css']
})
export class UmyocardsComponent implements AfterViewInit{



  ngAfterViewInit(): void {
    $('.moreless-button-he').click(function() {
      $('.moretext-he').slideToggle();
      if ($('.moreless-button-he').text() == "Read more") {
        $(this).text("Read less")
      } else {
        $(this).text("Read more")
      }
    });
        $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
    
        $('.moreless-button1').click(function() {
          event.preventDefault();
    $('.moretext1').slideToggle();
    if ($('.moreless-button1').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button2').click(function() {
          event.preventDefault();
    $('.moretext2').slideToggle();
    if ($('.moreless-button2').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button3').click(function() {
          event.preventDefault();
    $('.moretext3').slideToggle();
    if ($('.moreless-button3').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button4').click(function() {
          event.preventDefault();
    $('.moretext4').slideToggle();
    if ($('.moreless-button4').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
     
        $('.moreless-button5').click(function() {
          event.preventDefault();
    $('.moretext5').slideToggle();
    if ($('.moreless-button5').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
   
        $('.moreless-button6').click(function() {
          event.preventDefault();
    $('.moretext6').slideToggle();
    if ($('.moreless-button6').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
    
        $('.moreless-button7').click(function() {
          event.preventDefault();
    $('.moretext7').slideToggle();
    if ($('.moreless-button7').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
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
