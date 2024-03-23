import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aboutUsPage: String = "https://brandon-lee-last.github.io/WasteGlassRecovery/about-us";

  ngOnInit() {
    AOS.init();
  }

}
