import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import './../../../../assets/smtp.js'; // Adjust the path as necessary
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;

  sendMessage(){
    this.sendEmail('test@example.com', this.email, 'subject', this.message);
  }

  sendEmail(to: string, from: string, subject: string, body: string) {
    this.loading = true;
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'brandon30last@gmail.com',
      Password: 'Lucyourique34',
      To: to,
      From: from,
      Subject: subject,
      Body: body
    }).then(
      (message: any) => {
        this.loading = false
        
      }
    );
  }
  
}
