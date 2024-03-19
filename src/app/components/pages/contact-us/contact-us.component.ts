import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ServiceModalService } from '../../../services/service-modal.service';
import './../../../../assets/smtp.js'; // Adjust the path as necessary
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  constructor(private modalService: ServiceModalService){}

  ngOnInit() {
    AOS.init();
  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;
  Msg: String = '';
  showMsg: boolean = false;
  type: String = 'danger';

  sendMessage(){

    if(this.firstName === undefined || this.firstName === ''){
      this.Msg = 'Firstname is required.';
      this.type = 'danger';
      this.showMsg = true;
      return;
    }
    else if(this.lastName === undefined || this.lastName === ''){
      this.Msg = 'Lastname is required.';
      this.type = 'danger';
      this.showMsg = true;
      return;
    }
    else if(this.email === undefined || this.email === ''){
      this.Msg = 'Email is required.';
      this.type = 'danger';
      this.showMsg = true;
      return;
    }
    else if(this.message === undefined || this.message === ''){
      this.Msg = 'Message is required.';
      this.type = 'danger';
      this.showMsg = true;
      return;
    }

   try{
    this.showMsg = false;
    this.sendEmail('brandon30last@gmail.com', 'brandon30last@gmail.com', 'subject', this.message);
   }
   catch(err){
    console.log(err);
   }
  }

  sendEmail(to: string, from: string, subject: string, body: string) {
    this.loading = true;
    Email.send({
      SecureToken: "cdf418d6-7095-4ba4-9821-5fa42bf6bbf5",
      To: to,
      From: from,
      Subject: subject,
      Body: body
    }).then(
      (message: any) => {
        alert(message);
        if(message == 'OK'){
          this.Msg = 'Email was sent successfully'
          this.type = 'success'
        }
        else{
          this.Msg = message;
        }
        this.showMsg = true;
        this.loading = false

        // setTimeout(() => {
        //   this.showMsg = false;
        // }, 5000);
        // this.modalService.openDialog(message);
      }
    );
  }
  
}
