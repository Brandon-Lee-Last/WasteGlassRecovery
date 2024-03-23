import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component'; // Import your Home component
import { AboutUsComponent } from './components/pages/about-us/about-us.component'; 
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { DocumentComponent } from './components/pages/document/document.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home
  { path: 'home', component: HomePageComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent }, // About Us page
  { path: 'contact-us', component: ContactUsComponent }, // Contact Us page
  { path: 'gallery', component: GalleryComponent }, // gallery  page
  { path: 'document', component: DocumentComponent }, // services  page
  // Add any other routes you may need
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
