import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService} from '../../service/admin.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  alert:boolean = false;
  hide:boolean = true;
  userName = " ";
  userId : number;
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm)
  {
    // this.login.getLoginCredential();
    console.log(myform.value);
    // console.log(myform.value);
    
    console.log("form submited")
    console.log(myform.value)
    console.log(myform.value.userId)
    console.log(myform.value.pass)
    // invalide credential is suppose to be handle
    this._adminService.getLoginDetails(myform.value).subscribe(data=>{
      this.userName = data.userName;
      this.userId = data.userId;
      this.router.navigate(['/']);

      // if(data.password == myform.value.pass)
      // {
      //   this.userName = data.userName;
      //   this.router.navigate(['/']);
      // }
      // else
      // this.router.navigate(['/login'])
    }, error=>{
      console.log(error);
      this.alert = true;
      this.router.navigate(['/login'])
     })

  }

  closeAlert(){
    this.alert = false;
  }

  // getErrorMessage(){

  // }

}
