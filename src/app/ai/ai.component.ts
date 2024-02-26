// ai.component.ts
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  

  showPolicyModal:boolean=false
  showRefundModal:boolean=false
  showTermsModal:boolean=false

  openTermsModal(){
    this.showTermsModal = true;
  }
  openRefundModal(){
    this.showRefundModal = true;
  }
  openPolicyModal(){
    this.showPolicyModal = true;
  }


  closeTermsModal() {
    this.showTermsModal = false;
  }
  closePolicyModal() {
    this.showPolicyModal = false;
  }
  closeRefundModal() {
    this.showRefundModal = false;
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Get all elements with class 'container-content'
    const accordionItems = this.el.nativeElement.querySelectorAll('.container-content');

    // Add click event listener to each element
    accordionItems.forEach(item => {
      this.renderer.listen(item, 'click', () => {
        item.classList.toggle('active');
      });
    });
  }
}
