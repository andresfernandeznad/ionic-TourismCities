import { Component } from '@angular/core';
import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  slidesDidLoad(slides: Slides) {
    slides.startAutoplay();
  }
}
