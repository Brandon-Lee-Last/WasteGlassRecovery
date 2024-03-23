import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Impo

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeMessageComponent } from './components/home-message/home-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AlertModalsComponent } from './components/alert-modals/alert-modals.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { DocumentComponent } from './components/pages/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeMessageComponent,
    FooterComponent,
    AboutUsComponent,
    HomePageComponent,
    ContactUsComponent,
    AlertModalsComponent,
    LoadingScreenComponent,
    ServicesComponent,
    GalleryComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
