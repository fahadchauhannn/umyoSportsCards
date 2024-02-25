// ai.component.ts
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  
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
