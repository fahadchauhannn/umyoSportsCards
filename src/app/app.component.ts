import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Umyo Sports Cards';
  constructor(private titleService: Title, private metaService: Meta) {
    // this.titleService.setTitle(this.title)
  }
}
