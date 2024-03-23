import { Component, Injectable, OnInit } from '@angular/core';

import { ServiceModalService } from 'src/app/services/service-modal.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  constructor(private modal: ServiceModalService) {}

}
