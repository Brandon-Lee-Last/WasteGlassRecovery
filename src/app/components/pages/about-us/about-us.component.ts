import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit  {

  ngOnInit() {
    AOS.init();
    const img1 = document.getElementById('about-image-1') as HTMLImageElement;
    img1.src = '../../../../assets/images/Image1.jpeg'

    const img2 = document.getElementById('about-image-2') as HTMLImageElement;
    img2.src = '../../../../assets/images/Image2.jpeg'
  }

}
