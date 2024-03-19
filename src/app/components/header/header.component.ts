import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    const main = document.getElementById('main-logo') as HTMLImageElement;
    main.src = '../../../../assets/images/LogoMain.png'
  }

}
