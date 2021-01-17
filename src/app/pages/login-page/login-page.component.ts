import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm)
  {
    // this.login.getLoginCredential();
    console.log(myform.value);
    // console.log(myform.value);
    
    console.log("form submited")
  }

}
