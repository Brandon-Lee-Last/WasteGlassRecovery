import { Component, Injectable, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    // Set a descriptive title for your page
    this.titleService.setTitle('Waste Glass Recovery South Africa');

    // Add a meta description for better SEO
    this.meta.updateTag({ name: 'description', content: 'Promoting sustainable glass recovery and recycling in South Africa.' });
  }
}
