import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component'; // Import your Home component
import { AboutUsComponent } from './components/pages/about-us/about-us.component'; 
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home
  { path: 'home', component: HomePageComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent }, // About Us page
  { path: 'contact-us', component: ContactUsComponent }, // Contact Us page
  // Add any other routes you may need
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
